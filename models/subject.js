const mongoose = require('mongoose');
const DateTime = require("luxon");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
subject_id: {type: String, required: true},
subject_name: {type: String, required: true},
teacher_id: {type: Schema.Types.ObjectId, ref: "Teacher", required: true},
class_id: {type: Schema.Types.ObjectId, ref: "Class", required: true},
created_at: {type: Date, default: Date.now},
updated_at: {type: Date, default: Date.now}
});

// subject_id (Primary Key)
// subject_name
// teacher_id (Foreign Key referencing Teachers)
// class_id (Foreign Key referencing Classes)
// created_at
// updated_at


module.exports = mongoose.model("Subject", SubjectSchema);
