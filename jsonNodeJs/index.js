const fs = require("fs");

const bio = {
    name : "Shivam",
    age : "24",
    purpose : "learning Node Js",
};

// console.log(bio.purpose);

// const jsonData = JSON.stringify(bio); --> convert to json
// console.log(jsonData);

// Question 1. Convert to json
         // 2. dusre file me add kardena
         // 3. readfile 
         // 4. again convert back to Object ---> use parser
         // 5. console.log

const jsonData = JSON.stringify(bio);

fs.writeFileSync("add.txt",jsonData);

const readData = fs.readFileSync("add.txt","UTF-8");
console.log(readData);

const obj = JSON.parse(readData);
console.log(obj);



