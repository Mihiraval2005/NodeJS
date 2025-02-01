// creatr server

// const https = require('http');

// const server = https.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.end(`<h1>sdfsf</h1>`)
// });

// server.listen(7000,()=>{
//     console.log("start server")
// })



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




// Work with File & Folder Paths

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
