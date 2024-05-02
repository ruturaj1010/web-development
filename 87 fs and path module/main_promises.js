import fs from "fs/promises"

let a = await fs.readFile("Rutu.txt")

let b = await fs.appendFile("Rutu.txt", "\n How's this possible.")
console.log(a.toString())