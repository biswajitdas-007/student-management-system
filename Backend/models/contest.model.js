const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        tags: { type: String, required: true },
    }, {
    versionKey: false
}
);

const Contest = mongoose.model("contest", contestSchema);

module.exports = Contest;