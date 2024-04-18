const fs = require('fs')

console.log("program as started")


fs.readFile('../file.txt',()=>{
    console.log('file reading completed')

    setTimeout(()=>{
        console.log('setTimeout is exceuted')
    },0)

    setImmediate(()=>{
        console.log("setImmediate is exceuted")
    })

    process.nextTick(()=>{
        console.log("nextTick is exceuted")
    })
})



console.log("program as completed")