const mongoose = require('mongoose');
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const ExamSchema = new Schema({
    exam_id: {type: String, required: true},
    class_id: {type: Schema.Types.ObjectId, ref: "Class", required: true},
    subject_id: {type: Schema.Types.ObjectId, ref: "Subject", required: true},
    exam_date: {type: Date, default: Date.now, required: true},
    max_marks: {type: Number, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});




// exam_id (Primary Key)
// class_id (Foreign Key referencing Classes)
// subject_id (Foreign Key referencing Subjects)
// exam_date
// max_marks
// created_at
// updated_at

module.exports = mongoose.model('Exam', ExamSchema);