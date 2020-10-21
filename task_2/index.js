"use strict";

const express = require("express");
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.
const candidates = [];

app.post("/candidates", function (req, res) {
  const candidate = req.body;

  candidates.push(candidate);

  res.sendStatus(200);
});

function calcScore(skillCan, skillsNeeded) {
  let score = 0;
  skillsNeeded.forEach((skill) => {
    if (skillCan.findIndex((sk) => sk == skill) > -1) {
      score = score + 1;
    }
  });
  return score;
}

app.get("/candidates/search", function (req, res) {
  if (candidates.length == 0) res.sendStatus(404);
  const { skills: skillsText } = req.query;

  const skillsNeeded = skillsText.split(",");

  const scoredList = candidates
    .map((cand) => ({
      ...cand,
      score: calcScore(cand.skills, skillsNeeded),
    }))
    .sort((a, b) => b.score - a.score)
    .filter((cand) => cand.score >= 1);
  if (scoredList.length === 0) {
    res.send(404);
  }
  res.json(scoredList[0]);
});

app.listen(process.env.HTTP_PORT || 3000, () => console.log("running"));
