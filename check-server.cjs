const assert=require('node:assert/strict');
const {createServer}=require('./app');
(async()=>{
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}`;
 try{
  let r=await fetch(base+'/');assert.equal(r.status,200);assert.match(await r.text(),/Tilo me ayuda/);
  r=await fetch(base+'/main.js');assert.equal(r.status,200);assert.match(r.headers.get('content-type'),/javascript/);
  r=await fetch(base+'/superpoder-tristeza.mp4',{headers:{Range:'bytes=0-99'}});assert.equal(r.status,206);assert.equal((await r.arrayBuffer()).byteLength,100);
  r=await fetch(base+'/superpoder-tristeza.mp4',{method:'HEAD'});assert.equal(r.status,200);assert.ok(Number(r.headers.get('content-length'))>100);
  r=await fetch(base+'/.env');assert.equal(r.status,404);
  r=await fetch(base+'/%2e%2e%5cpackage.json');assert.equal(r.status,403);
  r=await fetch(base+'/missing.js');assert.equal(r.status,404);
  r=await fetch(base+'/',{method:'POST'});assert.equal(r.status,405);
  console.log('PASS: HTTP root, assets, video ranges, HEAD, missing files and path restrictions.');
 }finally{await new Promise(resolve=>server.close(resolve));}
})().catch(error=>{console.error(error);process.exitCode=1;});
