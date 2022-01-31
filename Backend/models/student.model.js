const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        city: { type: String, required: true },
        age: { type: Number, required: true },
        education: { type: String, required: true },
        gender: { type: String, required: true },
        contact: { type: Number, required: true }
    }, {
    versionKey: false
}
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;