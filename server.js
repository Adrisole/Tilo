'use strict';
// Hostinger imports this entry point. Start listening immediately on import.
const {createServer}=require('./app');
const port=Number(process.env.PORT||3000);
if(!Number.isInteger(port)||port<0||port>65535)throw new Error('Invalid PORT');
const server=createServer();
server.on('error',error=>{console.error(error.message);process.exitCode=1;});
server.listen(port,'0.0.0.0',()=>console.log(`Tilo listening on port ${server.address().port}`));
for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>server.close());
