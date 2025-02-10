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

const crypto = require('crypto');

const algo = 'aes-256-cbc';

const key = '12345678123456781234567812345678';

const iv = crypto.randomBytes(16);


function Encryption(data) {
    // console.log(data);
    const ciper = crypto.createCipheriv(algo, key, iv);
    let decryp = ciper.update(data, 'utf8', 'hex');
    decryp += ciper.final('hex');
    return decryp
}

function Decryption(Encryption) {
    const deci = crypto.createDecipheriv(algo, key, iv);
    const dec = deci.update(Encryption, 'hex', 'utf8');
    dec += deci.final('utf8')
    return dec
}
const msg = "hi mihir";

const enc = Encryption(msg);

console.log(enc, " encryptes")


const d = Decryption(enc);
console.log(d, "decription msg")
// formhandeling 
