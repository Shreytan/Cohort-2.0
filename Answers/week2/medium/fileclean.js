const fs = require("fs");

fs.readFile("b.txt" , "utf-8" , (err,data)=>{
    if(err)throw err;
    console.log("origional data " , data);
    let arr = data.split(" ");
    let clean = [];
    arr.forEach(word => {
        if(word != ''){
            clean.push(word);
        }
    })
    console.log(clean);

    fs.writeFile("b.txt" , clean.join(" ") , (err)=>{
        if(err) throw err;
        fs.readFile("b.txt","utf-8" , (err,data)=>{
            if(err)throw err;
            console.log("next data " , data);
        })
    })

    
});

