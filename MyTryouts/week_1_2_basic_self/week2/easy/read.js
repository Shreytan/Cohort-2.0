const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
    data +="Shreyansh gone rogue";
    fs.writeFile("a.txt",data ,(err)=>{
        console.log("success");
        fs.readFile("a.txt","utf-8",(err,data)=>{
            console.log(data);
        });
    });
    
    
})

// fs.appendFile("a.txt","SHreyannsh Shukla was here", (err,data) =>{
//     if(err)throw err;
// })

console.log("starting it");

