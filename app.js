const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath))

app.listen(3000, () => console.log());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/home.html"))
});
app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "./views/register.html"))
});
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "./views/login.html"))
});