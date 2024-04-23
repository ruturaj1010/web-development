// const http = require('node:http');
// import http from "http" // We have changed the type in package.json to module so using import.

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// part 2   named export
// import {a , b , c} from "./mymodule.js"
// console.log(a  , b ,c)

// part 3 default export
// import Rutu from "./mymodule.js"     // default export can be accessed by any name
// console.log(Rutu)


// part 4 require module 
const a = require("./mymodule1.js")
console.log(a , __dirname)