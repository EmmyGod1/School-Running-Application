const mongoose = require("mongoose");
const DateTime = require("luxon");

const Schema = mongoose.Schema;

const ResultSchema = new Schema({
result_id: {type: String, required: true},
exam_id: {type: String, ref: "Exam", required: true},
student_id: {type: String, ref: "Student", required: true},
marks_obtained: {type: Number, required: true},
grade: {type: String, required: true},
created_at: {type: Date, default: Date.now, required: true},
updated_at: {type: Date, default: Date.now, required: true},
});


// result_id (Primary Key)
// exam_id (Foreign Key referencing Exams)
// student_id (Foreign Key referencing Students)
// marks_obtained
// grade
// created_at
// updated_at



module.exports= mongoose.model("Result", ResultSchema);