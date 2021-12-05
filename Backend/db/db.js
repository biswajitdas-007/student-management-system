const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
    return mongoose.connect(`mongodb+srv://biswajit:${process.env.KEY}@cluster0.mzxys.mongodb.net/biswajit007?retryWrites=true&w=majority`)
}

module.exports = connect;