"use strict";

const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
app.use(bodyPaser.json());
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

const candidates = [];
app.get("/candidates", (req, res) => {
  res.json(candidates);
});

app.post("/candidates", function (req, res) {
  const body = req.body;
  const candidate = {
    name: body.name,
    lastname: body.lastname,
    skills: body.skills,
  };
  candidates.push(candidate);
  res.json(candidate);
});
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
{
    name: "Jim",
    lastname: "Coder",
    skills: ["nodejs","python","css"]
}

*/

// /candidates/search?skills=javascript,nodejs,express
app.get("/candidates/search", function (req, res) {});

app.listen(process.env.HTTP_PORT || 4000, () => console.log("running"));

// https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design
