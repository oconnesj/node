"use strict"

const url = "http://localhost:8080";

const express = require("express");
const app = express();
const port = 8181;
const getJSON = require("get-json");


app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    getJSON(`${url}/users/${id}`, (err, resp) =>{
        if(resp) res.send(resp);
        if(err) res.send(err);

    });
    res.send(user);
})

app.get("/about", (req, res) => {
    res.send("Sam O'Connell<br> Full Stavack Java Developer Student <br>MAX Technical Training")
});


app.get("/", (Request, response) => {
    response.send("Express web server is ready...");
})


app.listen(port, () => {
    console.log(`Express Server listening on port ${port}`);
})