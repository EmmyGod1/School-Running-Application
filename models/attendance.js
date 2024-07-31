const mongoose = require('mongoose');
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
    attendance_id: {type: String, required: true},
    student_id: {type: Schema.Types.ObjectId, required: true},
    class_id : {type: Schema.Types.ObjectId, required: true},
    date: {type: Date, default: Date.now},
    is_present: {type: Boolean, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});


// attendance_id (Primary Key)
// student_id (Foreign Key referencing Students)
// class_id (Foreign Key referencing Classes)
// date
// is_present
// created_at
// updated_at



module.exports = mongoose.model('Attendance', AttendanceSchema);