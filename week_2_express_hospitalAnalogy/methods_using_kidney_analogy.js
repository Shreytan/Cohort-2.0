const express = require("express");

var patient = [{
    name: "John",
    kidneys: [{
        healthy: true
    }, {
        healthy: true
    }]
}];

const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// GET endpoint to retrieve kidney health status
app.get("/", (req, res) => {
    const kidney = patient[0].kidneys;  // Get the kidneys array
    const kidneyNo = kidney.length;  // Total number of kidneys
    let kidneyHealthy = 0;  // Counter for healthy kidneys

    // Loop through kidneys to count healthy ones
    for (let i = 0; i < kidneyNo; i++) {
        if (kidney[i].healthy === true) kidneyHealthy++;
    }

    const kidneyUnhealthy = kidneyNo - kidneyHealthy; // Remaining kidneys are unhealthy

    res.json({
        kidneyHealthy: kidneyHealthy,
        kidneyUnhealthy: kidneyUnhealthy,
        noOfKidneys: kidneyNo,
    });
});

// POST endpoint to add a new kidney
app.post("/", (req, res) => {
    const p = req.body.isHealthy;  // Extract the "healthy" value from request body
    patient[0].kidneys.push({
        "healthy": p  // Add a new kidney to the patient's kidney array
    });
    res.json({
        "msg": "done successfully"  // Confirmation message
    });
});

// PUT endpoint to make all kidneys healthy
app.put("/", (req, res) => {
    if (UnhealthyKid()) {  // Check if there are any unhealthy kidneys
        for (let i = 0; i < patient[0].kidneys.length; i++) {
            patient[0].kidneys[i].healthy = true;  // Set all kidneys to healthy
        }
        res.json({
            "things have worked": "success"  // Confirmation message
        });
    } else {
        res.status(411).json({  // Return error if no unhealthy kidneys exist
            "msg": "no kidneys to fix"
        });
    }
});

// DELETE endpoint to remove unhealthy kidneys
app.delete("/", (req, res) => {
    if (UnhealthyKid()) {  // Check if there are any unhealthy kidneys
        const newKidneys = [];  // Create a new array for healthy kidneys
        for (let i = 0; i < patient[0].kidneys.length; i++) {
            if (patient[0].kidneys[i].healthy === true) {
                newKidneys.push({ "healthy": true });  // Add only healthy kidneys
            }
        }
        patient[0].kidneys = newKidneys;  // Replace old array with new filtered array
        res.json({ "hello ji": "hogya kaam aapka" });  // Confirmation message
    } else {
        res.status(411).json({ "hello ji": "kuch nahi ho raha" });  // Return error if no unhealthy kidneys exist
    }
});

// Function to check if there are any unhealthy kidneys
function UnhealthyKid() {
    for (let i = 0; i < patient[0].kidneys.length; i++) {
        if (patient[0].kidneys[i].healthy === false) {
            return true;  // Return true if at least one unhealthy kidney is found
        }
    }
    return false;  // Return false if all kidneys are healthy
}

app.listen(3000);  // Start the server on port 3000
