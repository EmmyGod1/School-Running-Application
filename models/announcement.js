const mongoose = require('mongoose');
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
    announcement_id: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    author_id: {type: Schema.Types.ObjectId, ref: "User"},
    publish_date: {type: Date, default: Date.now},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

// announcement_id (Primary Key)s
// title
// content
// author_id (Foreign Key referencing Users)
// publish_date
// created_at
// updated_at


module.exports = mongoose.model("Announcement", AnnouncementSchema);