const express = require("express");

const app = express();
app.use(express.json());
app.post("/health_checkup",(req,res)=>{
    const noOfKidneys = req.body.kidneys;
    const kidneyLength = noOfKidneys.length;
    console.log("gonna send ur no of kidneys mate");
    res.send("your no of kidneys is " + kidneyLength);

    console.log("gonna send ur no of kidneys mate");
});
//global catch , has 4 parameters in fckn , that's how express knows its error handling nature

app.use((error,req,res,next)=>{
    res.json({
        "msg": "something came up dude"
    })
})



app.listen(3000,()=>{
    console.log("port successfully running");
})