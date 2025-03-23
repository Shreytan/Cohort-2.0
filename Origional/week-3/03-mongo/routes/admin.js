const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const db = require('../db'); 
const Admin = db.Admin; // ✅ Explicitly get the Admin model
const { Course } = require('../db'); // Ensure this matches your db export


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password) res.status(404).json("send the body correctly");

    // check if a user with this username already exists
    
    else{
        Admin.create({
            username: username,
            password: password
        })
        .then(()=>{
            console.log("you gonna signup");
            res.json({
                message: 'Admin created successfully'
            })
        })
    
        .catch(()=>{
            res.json({"msg" : "failed"})
        });
    
       
    }
   
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imagelink = req.body.imagelink;

    Course.create({
        title: title,
        description:description,
        price: price,
        imagelink: imagelink
    })
    
    .then((response)=>{
        res.status(200).json({
            "msg" : "course has been craeted successfully",
            "course_id" : response.id
        })
    })

    .catch((err)=>{
        res.status(400).json({"msg" : "failed to create course" });
    });


});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({})
    .then((response)=>{
         res.send(response);
    })
    // Implement fetching all courses logic
});

module.exports = router;