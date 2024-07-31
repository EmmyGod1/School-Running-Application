const Announcement = require('../models/announcement');
const asyncHandler = require('express-async-handler');

// Display all Announcement Details
exports.All_Announcement_Detaills = asyncHandler((req, res, next ) => {
    res.send('All announcement yet to be completed')
});

// Display Single Announcement Details
exports.Single_Announcement_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single announcement details yet to be completed')
});

// Display of a single Announcement Create
exports.Single_Announcement_Create = asyncHandler((req, res, next ) => {
    res.send('Single announcement create yet to be completed')
});

// Display of a single Announcement Post
exports.Single_Announcement_Update = asyncHandler((req, res, next) => {
    res.send('Single announcement details is updated')
});

// Display of Single Announcement Delete
exports.Single_Announcement_Delete = asyncHandler((req, res, next) => {
        res.send('Single announcement details deleted')
});

