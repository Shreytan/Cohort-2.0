const fs = require("fs");

function CopyrightAtTheEnd(callback){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        console.log(data);
        if(err)throw err;
        data += "copyright 2025";

        fs.writeFile("a.txt",data , ()=>{
        callback();
        fs.readFile("a.txt","utf-8",(err,data)=>{
            console.log(data);
        })
        })
    });   
}

CopyrightAtTheEnd(()=>{
    console.log("end");
})