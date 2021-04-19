const express = require("express");
const app = express();
const mongoose = require('mongoose');

const Users = require('./models/users');

mongoose.connect('mongodb://localhost:27017/corkboard', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('MONGO CONNECTION OPEN')
})
.catch(err => {
  console.log("OH NO CONNECTION ERROR")
  console.log(err)
})



app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.post("/post", (req, res) => {
  console.log('Connected to React');
  res.redirect('/');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));