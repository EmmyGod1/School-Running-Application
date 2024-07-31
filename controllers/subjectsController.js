const Subject = require('../models/subject');
const asyncHandler = require('express-async-handler');

// Display all Subjects Details
exports.Subject_All_Detaills = asyncHandler((req, res, next ) => {
    res.send('All subjects yet to be completed')
});

// Display of a single Subject Details
exports.Subject_Single_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single subject Detail to be completed')
});

// Display of a single Subject Create
exports.Subject_Single_Create = asyncHandler((req, res, next ) => {
    res.send('Single subject create yet to be completed')
});

// Display of a single Subject Post
exports.Subject_Single_Update = asyncHandler((req, res, next) => {
    res.send('Single subject details is updated')
});

// Display of Single Subject Delete
exports.Subject_Single_Delete = asyncHandler((req, res, next) => {
        res.send('Single subject account deleted')
});