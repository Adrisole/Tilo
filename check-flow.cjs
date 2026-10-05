const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const nodes=new Map(),tools=[];
function node(key){if(!nodes.has(key))nodes.set(key,{hidden:false,innerHTML:'',textContent:'',className:'',dataset:{},listeners:{},addEventListener(t,f){this.listeners[t]=f},focus(){},setAttribute(){},removeAttribute(){},querySelector(s){return node(s)},showModal(){this.open=true},close(){this.open=false}});return nodes.get(key)}
const emotions=['enojo','miedo','tristeza','celos','palabras'].map(e=>Object.assign(node(e),{dataset:{emotion:e}}));
const steps=[node('s0'),node('s1'),node('s2')];
const document={querySelector:node,querySelectorAll:s=>s==='[data-emotion]'?emotions:steps,modelContext:{registerTool(t){tools.push(t)}}};
const ctx=vm.createContext({document,console});vm.runInContext(fs.readFileSync('dist/adventures.js','utf8'),ctx);vm.runInContext(fs.readFileSync('dist/app.js','utf8'),ctx);
const run=s=>vm.runInContext(s,ctx),click=(action)=>node('#activity').listeners.click({target:{closest(){return{dataset:{action}}}}});
for(const emotion of ['enojo','miedo','tristeza','celos','palabras']){
 run(`start('${emotion}')`);assert.match(node('#activity').innerHTML,/Página 1 de 3/);
 click('next');click('previous');assert.match(node('#activity').innerHTML,/Página 1 de 3/);
 click('next');click('next');click('next');assert.match(node('#activity').innerHTML,/disabled/);
 click('talk');assert.equal(run('state.step'),1);
 node('#activity').listeners.click({target:{closest(){return{dataset:{choice:'0'}}}}});click('talk');assert.equal(run('state.step'),2);
 click('next-question');click('prev-question');assert.equal(run('state.question'),0);
 click('next-question');click('next-question');click('next-question');assert.match(node('#activity').innerHTML,/Gracias por compartir/);
 click('restart');assert.equal(run('state.page'),0);click('home');assert.equal(node('#journey').hidden,true);
}
assert.equal(tools[0].name,'start_tilo_adventure');assert.equal(tools[0].execute({emotion:'tristeza'}).stage,'cuento');
assert.throws(()=>tools[0].execute({emotion:'invalid'}));assert.equal(run('state.emotion'),'tristeza');
for(const asset of ['style.css','app.js','adventures.js','tilo.jpg'])assert.ok(fs.existsSync('dist/'+asset));
console.log('PASS: cinco recorridos, navegación atrás, bloqueo antes de elegir, cierre, reinicio, referencias locales y herramienta con entrada válida e inválida.');
