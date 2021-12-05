const express = require("express");

const router = express.Router();

const Contest = require("../models/contest.model");

router.get("/contest", async function (req, res) {
    try {
        const contestDomain = await Contest.find().lean().exec();
        return res.send(contestDomain);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

router.post("/contest", async function (req, res) {
     try {
       const contestDomain = await Contest.create(req.body);
    return res.send(contestDomain);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

router.delete("/contest/:id", async function (req, res) {
    try {
        const contestDomain = await Contest.findByIdAndDelete(req.params.id).lean();
     return res.status(200).send(contestDomain);
    } catch (err) {
        return res.status(400).send(err.message);
    }
    
})
module.exports = router;