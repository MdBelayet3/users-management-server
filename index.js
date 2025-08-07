const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// some data of users
const users = [
    {id: 1, name: "Sabana", email: "sabana@gmail.com"},
    {id: 1, name: "Shabnoor", email: "shabnoor@gmail.com"},
    {id: 1, name: "Sabila", email: "sabila@gmail.com"},
]

// API
app.get("/", (req, res) =>{
    res.send("Users management server is running");
})

app.get("/users", (req, res) =>{
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running of port : ${port}`)
})