const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://biswajit:6SKpjnaWfEB04Ihr@cluster0.mzxys.mongodb.net/biswajit007?retryWrites=true&w=majority")
}

module.exports = connect;