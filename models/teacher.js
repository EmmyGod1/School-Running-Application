const mongoose = require('mongoose');
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const TeacherSechema = new Schema({
teacher_id: {type: String, required: true, maxLength: 100, minLength: 3, unique: true},
user: {type: Schema.Types.ObjectId, ref: "User"},
first_name: {type: String, required: true},
last_name: {type: String, required: true},
hire_date: {type: Date, default: Date.now},
created_at: { type: Date, default: Date.now },
updated_at: { type: Date, default: Date.now },
});





// teacher_id (Primary Key)
// user_id (Foreign Key referencing Users)
// first_name
// last_name
// email
// phone
// hire_date
// created_at
// updated_at

// Export model
module.exports = mongoose.model("Teacher", TeacherSechema);
