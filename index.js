<<<<<<< HEAD
const express = require('express');
const app = express();
=======
const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// some data of users
const users = [
    {id: 1, name: "Sabana", email: "sabana@gmail.com"},
    {id: 2, name: "Shabnoor", email: "shabnoor@gmail.com"},
    {id: 3, name: "Sabila", email: "sabila@gmail.com"},
]

app.use(cors())

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
>>>>>>> c1541cd90ad4de3dada55b5bf737d4963369c8cb
