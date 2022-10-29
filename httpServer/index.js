const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./api.json","UTF-8");
//calling api also in this...
const server = http.createServer((req, res) =>{
    const name = JSON.parse(data);
    if(req.url == "/")
        res.end("<h2>Hello I'm here!! my friend Its Home Page</h2>");
    else if(req.url == "/about") {
        res.writeHead(200,{"Content-type":"text/html"}); 
        res.end("<h2>You are on about page@@</h2>");
    }
    else if(req.url == "/apiUrl") {
        // fs.readFile("./api.json", "utf-8", (err, data) => {
        //     res.writeHead(200,{"Content-type":"text/html"}); 
        //     console.log(data);
        //     // const name = JSON.parse(data);
        //     res.end("<h2>"+name[0].name+"</h2>");
        // })
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<h2>"+name[0].name+"</h2>"+"\n<h2>Api Called</h2>"); 
        // res.end("<h2>Api Called</h2>");
    }
    else {
        res.writeHead(404,{"Content-type":"text/html"});  
        res.end("<h2>404!! Page not found</h2>");
    }
});

server.listen(8000, "127.0.0.1" , ()=> {
    console.log("listening to port no. 8000");
});