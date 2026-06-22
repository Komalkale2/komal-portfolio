const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Komal Biography Backend Running");
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});