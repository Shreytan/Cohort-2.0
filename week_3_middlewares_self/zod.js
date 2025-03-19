const express = require("express");
const z = require("zod");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const schema = z.array(z.number());

app.post("/health-checkup", (req, res) => {
  const noOfKidneys = req.body.kidneys; // Assuming the body contains "kidneys" as an array
  const response = schema.safeParse(noOfKidneys);

  res.send(response);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
