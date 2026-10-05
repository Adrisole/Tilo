const {spawn}=require('node:child_process');
const assert=require('node:assert/strict');
(async()=>{
 const child=spawn(process.execPath,['-e',"require('./server.js')"],{cwd:__dirname,env:{...process.env,PORT:'0'}});
 let output='';
 try{
  const port=await new Promise((resolve,reject)=>{
   const timeout=setTimeout(()=>reject(new Error('Imported entry did not listen within 3 seconds')),3000);
   child.stdout.on('data',chunk=>{output+=chunk;const match=/listening on port (\d+)/.exec(output);if(match){clearTimeout(timeout);resolve(match[1]);}});
   child.on('error',error=>{clearTimeout(timeout);reject(error);});
   child.on('exit',code=>{clearTimeout(timeout);reject(new Error('Entry exited: '+code));});
  });
  const response=await fetch(`http://127.0.0.1:${port}/`);assert.equal(response.status,200);assert.match(await response.text(),/Tilo me ayuda/);
  console.log('PASS: Hostinger-style import starts listening within 3 seconds and serves homepage.');
 }finally{child.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});
