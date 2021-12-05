const express = require('express');
const connect = require("./db/db.js");
const studentRouter = require("./controllers/student.controller");
const contestRouter = require("./controllers/contest.controller");
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/", studentRouter);
app.use("/", contestRouter);
app.listen(4000, async () => {
    await connect();
    console.log("Listening to port 4000");
});