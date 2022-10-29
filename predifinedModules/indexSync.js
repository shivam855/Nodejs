// console.log("Hello World!!! Its My First Node.js File :)) ");

const fs = require("fs");

fs.mkdirSync("thapa")

fs.writeFileSync("bio.txt", "Hello, My name is Shivam Rathour and at this time i am learning node js");

fs.appendFileSync("bio.txt","\nThanks for giving me a chance!!!!!");

const buf_data = fs.readFileSync("bio.txt");
const org_data = buf_data.toString();
console.log(org_data);

const org_data1 = fs.readFileSync("bio.txt").toString();
console.log(org_data1);

const org_data2 = fs.readFileSync("bio.txt","utf8")
console.log(org_data2);

fs.renameSync("bio.txt","bioRename.txt");

fs.rmdirSync("thapa");