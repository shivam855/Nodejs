const fs = require("fs");

// fs.mkdir("AsyncFolderWithoutCallBack"); --> will not work...

fs.mkdir("Async",(err) => {
    console.log("Folder Already Created Enjoy :)");
});

fs.writeFile("bioAsync","Now it will work with call back function", (err) => {
    console.log("File is created with data!! :)");
});

fs.appendFile("bioAsync","\nNow it will work with call back function", (err) => {
        console.log("data is appended!! :)");
    });

fs.rename("bioAsync","bioAsync.txt", (err) => {
        console.log("File rename compeleted!! :)");
    });

fs.readFile("bioAsync.txt","UTF-8", (err,data) => {
    // console.log(err); --> null will come
    console.log(data);
});

fs.rmdir("Async",(err) => {
        console.log("Delete Folder Which One Is Already Created Enjoy :)");
    });
    
    