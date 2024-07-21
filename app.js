const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3000, () =>{
    console.log("Running on 3k");
} )

app.get("/", (req,res) =>{
    res.json("Hi Jitesh here")
})