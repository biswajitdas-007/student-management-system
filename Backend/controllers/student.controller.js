const express = require("express");

const router = express.Router();

const Student = require("../models/student.model");

router.get("/students", async function (req, res) {
    try {
        const studentdomain = await Student.find().lean().exec();
        return res.send(studentdomain);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

router.post("/students", async function (req, res) {
    try {
       const studentdomain = await Student.create(req.body);
    return res.send(studentdomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});
router.post("/student-login", async function (req, res) {
    try {
        const check = await Student.findOne({ "email": req.body.email });
        if (check) {
            return res.send(check);
        } else {
            return res.send("user-not-found");
        }
    }
    catch (err){
        return res.status(400).send(err.message);
    }
})
router.delete("/:id", async function (req, res) {
    try {
        const studentdomain = await Student.findByIdAndDelete(req.params.id).lean();
     return res.status(200).send(studentdomain);
    } catch (err) {
        return res.status(400).send(err.message);
    }
    
})
module.exports = router;