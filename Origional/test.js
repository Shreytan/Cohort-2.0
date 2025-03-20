const express = require("express");
const app = express();
const port = 3000;

function sum(n){
  let sum =0;
  for(let i =0;i<n;i++){
    sum+=i;
  }
  return sum;
}

app.get("/",(req,res)=>{
  const n = req.query.n;
  const ans = sum(n);
  res.send(ans.toString() + " here's the answer bud");
})

app.listen(`app started on port ${port}`);