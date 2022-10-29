// doing streaming 1 way
const fs = require("fs");

// const streamFile = fs.readFileSync("read.txt","utf-8");
// console.log(streamFile);

const http = require("http");

// const server = http.createServer( (req, res) => {

// });

// server.on('request', (req,res) => {
//     fs.readFile("read.txt","utf-8", (err,data) => {
//         if(err) return console.log(err);        
//         res.end(data.toString());
//     });
// });

// stream 2 way 
const server = http.createServer( (req, res) => {
    const readStream = fs.createReadStream("read.txt");
    readStream.on('data', (chunkData) => {
        res.write(chunkData);
    });
    readStream.on("end", () => {
        res.end();
    })
    readStream.on("error", (err) => {
        console.log(err);
        res.end("file not found");
    });
});
server.listen(8000, "127.0.0.1");