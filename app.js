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



app.post("/addplayer/:uid", async (req, res) => {
  let data = req.body;
  let user = await playerModel.find({
    id: req.params.uid,
  });
  console.log(user);
//   let arr = [];
  if (user.length == 0) {
    console.log("user is in if");
    try {
      let response = await playerModel.insertMany({
        id: data.id,
        name: data.name,
        wins: data.wins,
        attempts: data.attempts,
      });
      res.json("added to db");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json("user already exists");
    console.log("user already exists");
  }
});
