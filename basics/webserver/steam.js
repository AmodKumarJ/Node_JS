const readline = require('readline')
const fs = require('fs')
const http=require('http')
const url = require('url') 
const events = require('events')

//custome modules
const replaceHtml = require('./modules/replaceHtml')
const user = require('./modules/User')
const { request } = require('https')
const { error } = require('console')


const server = http.createServer()

server.listen(8000,'127.0.0.1',()=>{
    console.log('server started')
})
// server.on('request',(req,res)=>{
//         fs.readFile('./modules/input.txt',(err,data )=>{
//             if(err){
//                 res.end('---something wrong!---')
//                 return
//             }
//             res.end(data)
//         })
// })

// using steam
// server.on('request',(req,res)=>{
//     let rs = fs.createReadStream('./modules/input.txt')

//     rs.on('data',(chunk)=>{
//         res.write(chunk)
//     })
//     rs.on('end',()=>{
//         res.end()
//     })
//     rs.on('error',()=>{
//         res.end('error occured')
//     })
    
// })

//using PIPE METHOUD
server.on('request',(req,res)=>{
    let rs = fs.createReadStream('./modules/input.txt')
    rs.pipe(res)
})
