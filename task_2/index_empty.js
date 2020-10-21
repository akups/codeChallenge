"use strict";

const express = require("express");
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post("/candidates", function (req, res) {});
/* 

{
    name: "Akua",
    lastname: "Appiah",
    skills: ["nodejs","reactjs","mongodb"]

}

{
    name: "Bogdan",
    lastname: "Nedelcu",
    skills: ["nodejs","express","sql"]

}

*/

// /candidates/search?skills=javascript,nodejs,express
app.get("/candidates/search", function (req, res) {});

app.listen(process.env.HTTP_PORT || 3000, () => console.log("running"));
