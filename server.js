//===================== fs modules create file ,read,renamne,deleta,update much moer ...//==============================

// for create file
// const fs = require('fs');

// fs.writeFile('My.html','Added',(err)=>{
//     if(err){
//         console.log(err," err");
//     }

//     console.log("added html file")
// })


// for read file

// const fs = require('fs');

// read.readFile('My.html','utf-8',(err,data)=>{
//     if(err){
//         console.log(err," Show err")
//     }
//     console.log("REading......",data)
// })

// try {
//     const data = fs.readFileSync('My.html', 'utf-8');
//     console.log(data)
// }
// catch (err) {
//     console.log(err)
// }





// const path = require('path');

// const filepath = 'C:/Users/Admin/OneDrive/Desktop/mihir/Latest_Node/my-node-app'
// // console.log(__dirname);
// console.log(path.basename(filepath));

// (System Information)
// const os = require('os');

// console.log(os.platform());
// console.log(os.cpus().length)


// Appending Data to a File
// const fs = require('fs');

// fs.appendFile('My.html','\n htmlssssssssss',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("addes append data")
// })

//  Deleting Files
// const fs = require('fs');

// fs.unlink('My.css',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Delete Success")
// })


// Renaming Files
// const fs = require('fs');

// fs.rename('My.html','my.js',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("rename workerData...")
// })


// Creating  Directories

// const fs = require('fs');


// fs.mkdir('LATEAST_NODE',{recursive:true},(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("creates")
// })

// Remove  Directories
// const fs = require('fs');


// fs.rmdir('LATEAST_NODE',{recursive:true},(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("creates")
// })



// https modeuls
// creatr server

// const https = require('http');

// const server = https.createServer((req, res) => {
//     res.statusCode = 200;
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.end(`<h1>Welcome Raval...</h1>`)
//     console.log(req.method,"method");
//     console.log(req.url,"method");
// });

// server.listen(4000, () => {
//     console.log("start server")
// })

//  Handling Different Routes (URLs)

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url ===  '/'){
//         res.end("Home")
//     }
//     else if(req.url === '/about'){
//         res.end("about")
//     }
//     else{
//         res.statusCode = 404;
//         res.end("No Page"   )
//     }
// })

// server.listen(4000,()=>{
//     console.log("server start...")
// })


//  Sending Data in Responses:
// const http = require('http');

// const server = http.createServer((req,res)=>{
//    req.statusCode = 200;
//    res.setHeader('Content-Type','text/html');
//    res.end("<h1>Hii h1</h1>")
// })


// const server = http.createServer((req, res) => {
//     req.statusCode = 200;
//     if (req.url === '/') {
//         res.setHeader('Content-Type', 'application/json');
//         const response = {
//             message: "Helo demo",
//             status: "Success"
//         };

//         res.end(JSON.stringify(response));
//     }
//     else if (req.url === '/about') {
//         req.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end("<h1>Hii h1</h1>")
//     }

// })

// server.listen(4000, () => {
//     console.log("server start...")
// })


// Path modeules

// const path = require('path');

// const filePath = "/home/user/documents/file.txt";

// console.log("File Name:", path.basename(filePath));
// console.log("Directory:", path.dirname(filePath));
// console.log("Extension:", path.extname(filePath));
// console.log("Absolute Path:", path.resolve(filePath));

// const newPath = path.join(path.dirname(filePath), "newfile.txt");
// console.log("New File Path:", newPath);



// callback

// Why use?
// 🔹 Reading files (fs.readFile())
// 🔹 Fetching API data (https.get())
// 🔹 Handling web requests (http.createServer())
// 🔹 Working with databases (MongoDB, MySQL)
// 🔹 Setting timers (setTimeout(), setInterval())
// 🔹 Listening to events (EventEmitter)


// Handel JSON data
// const http = require('http');


// const server = http.createServer((req,res)=>{
//     if(req.url === '/api'){
//         res.writeHead(200,{"content-type":"application-json"});
//         res.end(JSON.stringify({message:"hii mihir",status:"success"}));
//     }
//     else{
//         res.writeHead(404,{"content-type":"application-json"});
//         res.end(JSON.stringify({message:"not found",status:"fail"}))
//     }
// })

// server.listen(3000,()=>{
//     console.log("server start");
// })


// create server using EXPRESS
// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("start")
// })

// app.listen(3000)

// middleware-----------------------------------------
// const express = require('express');
// const app = express();



// app.use((req, res, next) => {
//     console.log("run middleware");
//     next();
// })

// app.get('/', (req, res) => {
//     res.send("hyy home page");
// })
// app.get('/about', (req, res) => {
//     res.send("hyy about");
// })

// app.listen(3000);


// eventLoop
// const Emiter = require('events');

// const ap = new Emiter();

// ap.on('hii',(name)=>{
//     console.log(`onnn ${name}`)
// })

// ap.emit('hii',"mihir");



// Crypto Module

// const crypto = require('crypto');

// const hash = crypto.createHash('sha256').update('pass35a').digest('hex');

// console.log(hash)

// const crypto = require('crypto');

// const algo = 'aes-256-cbc';

// const key = '12345678123456781234567812345678';

// const iv = crypto.randomBytes(16);


// function Encryption(data) {
//     // console.log(data);
//     const ciper = crypto.createCipheriv(algo, key, iv);
//     let decryp = ciper.update(data, 'utf8', 'hex');
//     decryp += ciper.final('hex');
//     return decryp
// }

// function Decryption(Encryption) {
//     const decipher = crypto.createDecipheriv(algo, key, iv);
//     let dec = decipher.update(Encryption, 'hex', 'utf8');
//     dec += decipher.final('utf8');
//     return dec;
// }
// const msg = "hi mihir";

// const enc = Encryption(msg);

// console.log(enc, " encryptes")


// const d = Decryption(enc);
// console.log(d, "decription msg")
 


// Event Loop & Asynchronous Programming in Node.js
// Node.js is single-threaded but can handle many tasks at once using the event loop. This allows non-blocking operations like reading files, making API calls, and working with databases.

// console.log("1 node");

// process.nextTick(()=> console.log("2 node"));
// Promise.resolve().then(()=>console.log("3 node"));

// setTimeout(()=>console.log("4 node"),0);
// setImmediate(()=> console.log("5 node"));

// console.log('6 node')

// function g(name,callback){
//     console.log(name);
//     callback()
// }
// g('m',function(){
//     console.log("call")
// })

// callbackHell
// setTimeout(()=>{
//     console.log("1");
//     setTimeout(()=>{
//         console.log("2");
//         setTimeout(()=>{
//             console.log('3')
//             setTimeout(()=>{
//                 console.log('4')
//             },3000)
//         },3000)
//     },3000)
// },3000)


// Promises (then, catch)
// const promise = new Promise((res,rej)=>{
//     let success = false;
//     setTimeout(()=>{
//         if(success){

//             res("workDone")
//         }
//         else{

//             rej("problem");
//         }
//     },1000)
// })
// promise.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// })



// async/await
// function Data(){
//     return new Promise((res)=>{
//         setTimeout(()=>{

//             res("done")
//         },1000)
//     })
// }

// async function  fetc(){
//     console.log("fetching")
//     const prev = await Data();
//     console.log(prev,"fdfsfsdfsdfsddfd")
// }

// fetc()



// express[server create]

// const express = require('express');

// const app = express();

// const port = 5000;

// app.get('/',(req,res)=>{
//     res.send("hu")
// })
// app.listen(port)



// 5. Handling Request Parameters & Query Strings
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('get Data')
})

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

 
app.get('/search', (req, res) => {
    res.send(`Search term: ${req.query.q}`);
});


app.listen(5000)
