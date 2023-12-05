

const http=require('http');
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end("Hey Uki!"); 
});
server.listen(port,()=>{
    console.log(`Sever running at ${port}`)
});

//to create file

const fs=require("fs");
fs.writeFile("file.txt","Whats up",(err)=>{
    if(err)throw err;
    console.log("data written file");
});

//to read file

fs.readFile("file.txt","utf8",(err,data)=>{
    if(err)throw err;
    console.log(data);
});

const app=require("./app");
app.sayHello();

//Node.js Event-01

// const events = require('events');

// const emitter = new events.EventEmitter();

// console.log(emitter);

// emitter.on('customEvent', (message) => {
//   console.log(message);
// });

// // console.log(emitter);

// emitter.emit('customEvent', 'Hello World'); // Outputs: "Hello World"

// emitter.on("myFunction",(value)=>{
//     console.log(value);
// })
// console.log(emitter);
// emitter.emit("myFunction","not an error");