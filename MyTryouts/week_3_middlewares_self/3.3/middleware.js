// -------------------------WITHOUT THE USE OF MIDDLEWARES < BY USING FUCNTION FOR CHECKS -----------------------// 


// const express = require("express");

// const app = express();

// function CheckAge(age) {
//     return age >= 14; // ✅ Simplified return statement
// }

// app.get("/ride1", (req, res) => {
//     const age = parseInt(req.query.age); // ✅ Use `req.query` for GET requests

//     if (isNaN(age)) {
//         res.status(400).json({ msg: "Invalid age input" }); // ✅ Handle missing/invalid age
//     }

//     if (CheckAge(age)) {
//         res.json({ msg: "You can ride the ride" });
//     } else {
//         res.status(411).json({ msg: "You are not 14 years old yet, bud" });
//     }
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });





// // ------------------------------------WITHOUT THE USE OF MIDDLEWARES -------------------------------------------

const express = require("express");

const app = express();

function CheckAge(req,res,next) {
    const age = parseInt(req.query.age); // ✅ Use `req.query` for GET requests

    if (isNaN(age)) {
        res.status(400).json({ msg: "Invalid age input" }); // ✅ Handle missing/invalid age
    }
    else if (age >= 14) {
        res.json({
            msg : "you go ahead ride that , ur above 14"
        })
    }
    res.status(411).json({ msg: "You are not 14 years old yet, bud" });
    next();
}

app.get("/ride1", CheckAge , (req, res) => {
    res.json({
        msg : "ur riding it wohoooo"
    })
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
