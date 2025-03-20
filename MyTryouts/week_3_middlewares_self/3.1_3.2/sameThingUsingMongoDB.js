const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb+srv://shreyanshshukla7:0SEA32iH5nU5mAXm@cluster0.ivw5f.mongodb.net/userappnew");

const User = mongoose.model('Users',{  name : String , email : String , Password : String});

app.use(express.json());

app.post("/signup" , async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await User.findOne({email : email});
    if(existingUser){
        res.status(400).send({message : "User already exists"});
    }
    const user = new User({
        email: email,
        password: password,
        name: name ,
    });
    
    user.save();

    res.json({
        "msg" : "user signed up successfully"
    })
    
})
app.listen(3000);