const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
//   for (let user of ALL_USERS) {
//     if(user.username === username && user.password === password){
//         return true;
//     }
//   } " I DID IT MY WAY"
const bool = ALL_USERS.some((match) => {
    return (match.username === username &&
        match.password === password);

  })
  return bool; // assignment said use find but find returns the whole object  , but this thing(.some) returned      the bool value , so i searched and used that 
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json(ALL_USERS.filter((user)=> user.username!= username));
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
  // return a list of users other than this username
 
});

app.listen(3000)