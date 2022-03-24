// creating fs module
const fs = require("fs");

// write file using asynchronous way

fs.writeFile("read.txt", "I'm very happy today", (err)=>{
    console.log("file is created");  
    
    console.log(err);  // to check error in file
});            //Callback function

// Update file

fs.appendFile("read.txt", "have a nice day",(err)=>{
    console.log("data updated succsessfully");

});         //callback function


// read file

fs.readFile("read.txt", "utf8",(err,data)=>{
    console.log(data);

});         //callback function


// Delete file

//fs.unlink("read.txt",(err)=>{
   // console.log("file deleted succsessfully");
//});