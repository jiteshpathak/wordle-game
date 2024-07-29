const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
    try {
        const client = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
        return client;
    } catch (error) {
        console.log(error);
    }
}

module.exports.default = connectDB();