// api/server.js

const express = require("express")
const app = express()
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get("/", function (req, res) {
  res.send("nihao")
})
app.get("/mobx-app", function (req, res) {
  res.json({ "name": "张三" })
  // res.send("nihao")
})
app.post("/other-app", function (req, res) {
  res.json({other: "OKK"});
})

app.listen(3000, () => {
  console.log("app listening on port 3000")
})
