const { log } = require("console");
let file=require("fs");
file.writeFile("red.js","console.log(`hii`)",()=>{log("ready....")})