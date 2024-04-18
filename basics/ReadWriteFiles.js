const fs = require('fs')
// reading and writting the file
let textin = fs.readFileSync('./file.txt','utf-8')//path of the file,encoding (read the file synchronusly by single thread)
console.log(textin)

let Content  = `i am writting the data ${textin} \n Date Created ${new Date()}`
fs.writeFileSync('./writeFile.txt',Content)//file path were we wan to write 
//sync are blocking code