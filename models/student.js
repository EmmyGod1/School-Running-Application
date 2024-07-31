
const mongoose = require('mongoose');
const DateTime = require("luxon");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
student_id: {type: String, required: true},
user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
first_name: {type: String, required: true},
last_name: {type: String, required: true},
date_of_birth: {type: String, required: true},
address: {type: String, required: true},
parent_contact: {type: String, required: true},
class_id: {type: Schema.Types.ObjectId, ref: "Class", required: true},
admission_date: {type: Date, default: Date.now},
created_at: {type: Date, default: Date.now},
updated_at: {type: Date, default: Date.now}
});





// student_id (Primary Key)
// user_id (Foreign Key referencing Users)
// first_name
// last_name
// date_of_birth
// address
// parent_contact
// admission_date
// created_at
// updated_at

module.exports = mongoose.model("Student", StudentSchema); 