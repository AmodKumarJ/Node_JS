let fs = require('fs');
fs.readFile('./file.txt','utf-8',(err,data)=>{//read Async
    console.log(data)
})
console.log("--reading the file........")
//run in the background main thread is empty the next line can run read file without blocking the main thread