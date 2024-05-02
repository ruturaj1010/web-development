const { error } = require( "console" )
const fs =  require("fs")

// console.log(fs)

console.log("creating")
// fs.writeFileSync("Rutu.txt" , "Ruturaj is a good boy")
fs.writeFile("Ruturaj.txt" , "Ruturaj is clever student." , ()=>{
    console.log("Done!")
    fs.readFile("Ruturaj.txt" , (error,data)=>{
        console.log(error , data.toString())
    })
})

fs.appendFile("Rutu.txt"," He is also bad guy." , ()=>{
    fs.readFile("Rutu.txt" , (e , d)=>{
        console.log(d.toString())
    })
})
console.log("task completed")