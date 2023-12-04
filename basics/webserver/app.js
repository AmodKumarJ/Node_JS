const readline = require('readline')
const fs = require('fs')
const http=require('http')
//step1:Create server
const server = http.createServer((request,response)=>{//request,response 
        //response.end("hello from the server")
        console.log('A new request is recived ')
        console.log(response)

})
//step2:start the server
server.listen(8000,'127.0.0.1',()=>{//port,ip-add,callback
    console.log("Server started")
})