const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Please enter the your name",(name)=>{
    console.log("You entered "+name)
    rl.close()
})//fisrst argument = display to the user second Argu = collback function
rl.on('close',()=>{
    console.log("InterFace is close")
    process.exit(0)
})//parameter 1 = event name parameter 2 = collback func