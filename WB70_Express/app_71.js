const express = require("express");

const app = express();// needed
const port = 80;

app.get("/", (req, res)=>{
    res.send('home!');
});
app.post("/about", (req, res)=>{
    res.send("This is my first express app about(post).");
});
app.get("/contact", (req, res)=>{
    res.send("This is my first express app contact.");
});
app.get("/service", (req, res)=>{
    res.status(404).send("This is my first express app service.");
});

app.listen(port, ()=>{
    console.log(`application started successfully on the port ${port}`);
});