const mongoose = require("mongoose");
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const FeeSchema = new Schema({
fee_id: {type: String, required: true},
student_id: {type: Schema.Types.ObjectId, ref: "Student", required: true, unique: true},
fee_type: {type: String, required: true},
amount: {type: Number, required: true},
due_date: {type: Date, default: Date.now, required: true },
status: {type: Boolean, }
});


// fee_id (Primary Key)
// student_id (Foreign Key referencing Students)
// fee_type
// amount
// due_date
// status
// created_at
// updated_at






module.exports = mongoose.model("Fee", FeeSchema);