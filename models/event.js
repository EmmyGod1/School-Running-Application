const mongoose = require('mongoose');
const DateTime = require('luxon');

const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    event_id: {type: String, required: true, unique: true},
    event_name: {type: String, required: true},
    event_date: {type: Date, default: Date.now},
    description: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});


// event_id (Primary Key)
// event_name
// event_date
// description
// created_at
// updated_at

module.exports = mongoose.model("Event", EventSchema);