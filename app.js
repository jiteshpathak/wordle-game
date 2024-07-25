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
  let user = await playerModel.findOne({id: req.params.uid,});
  console.log(user);
//   let arr = [];
  if (user.length == 0) {
    console.log("user being created");
    try {
      let response = await playerModel.create({
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

app.patch("/wins/:uid", async (req,res) => {
  try {
    let query = await playerModel.updateOne(
      {id : req.params.uid},
      {$inc : {wins:1}}
    )
    res.json("added 1 to logged in user")
  } catch (error) {
    console.log(error);
  }  
})

app.patch("/attempts/:uid", async (req,res) => {
  try {
    let query = await playerModel.updateOne(
      {id : req.params.uid},
      {$inc : {attempts:1}}
    )
    res.json("added 1 attempt to logged in user")
  } catch (error) {
    console.log(error);
  }  
})