const mongoose = require('mongoose');
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
class_id: {type: String, required: true},
class_name: {type: String, required: true},
class_teacher_id: {type: Schema.Types.ObjectId, required: true},
start_time: {type: Date, default: Date.now},
end_time: {type: Date, default: Date.now},
created_at: {type: Date, default: DateTime},
updated_at: {type: Date, default: Date.now}
});



// class_id (Primary Key)
// class_name
// class_teacher_id (Foreign Key referencing Teachers)
// start_time
// end_time
// created_at
// updated_at



module.exports = mongoose.model("Class", ClassSchema);
