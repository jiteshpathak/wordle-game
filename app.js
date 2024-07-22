const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const database = require("./database");
const playerModel = require("./database/model/Player");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Running on 3k");
});

app.get("/", (req, res) => {
  res.json("Hi Jitesh here");
});

app.post("/addplayer", async (req, res) => {
  let data = req.body;
  // console.log(data);
  try {
    let response = await playerModel.insertMany({
      id: data.id,
      name: data.name,
      wins: data.wins,
      attempts: data.attempts,
    });
    res.json("added to db")
  } catch (error) {
    console.log(error);
  }
});
