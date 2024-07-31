const Event = require('../models/event');
const asyncHandler = require('express-async-handler');

// Display all Events Details
exports.All_Events_Detaills = asyncHandler((req, res, next ) => {
    res.send('All events yet to be completed')
});

// Display Single Events Details
exports.Single_Event_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single event details yet to be completed')
});

// Display of a single Event Create
exports.Single_Event_Create = asyncHandler((req, res, next ) => {
    res.send('Single event create yet to be completed')
});

// Display of a single Event Post
exports.Single_Event_Update = asyncHandler((req, res, next) => {
    res.send('Single event details is updated')
});

// Display of Single Event Delete
exports.Single_Event_Delete = asyncHandler((req, res, next) => {
        res.send('Single event details deleted')
});