const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
        user_id: { type: String, required: true, unique: true, minLength : 3, MaxLength : 100},
        user_name: { type: String, minLength : 3, MaxLength : 100},
        password: { type: String, required: true, unique: true},
        user_role: { type: String},
        email_address: {type: String, unique: true,},
        phone_number: {type: String, required: true},
        created_at: { type: Date, defualt: Date.now },
        updated_at: { type: Date, default: Date.now },
      });
    

// user_id (Primary Key)
// username
// password
// email
// role
// created_at
// updated_at

// Export model
module.exports = mongoose.model("User", UserSchema);
