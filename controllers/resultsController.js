const Result = require('../models/result');
const asyncHandler = require('express-async-handler');

// Display all Results Details
exports.Result_All_Detaills = asyncHandler((req, res, next ) => {
    res.send('All results yet to be completed')
});

// Display Single Class Details
exports.Result_Single_Class_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single Class results yet to be completed')
});

// Display of a single Student Result's Details
exports.Result_Single_Student_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single result Detail to be completed')
});

// Display of a single Result Create
exports.Result_Single_Create = asyncHandler((req, res, next ) => {
    res.send('Single result create yet to be completed')
});

// Display of a single Result Post
exports.Result_Single_Update = asyncHandler((req, res, next) => {
    res.send('Single result details is updated')
});

// Display of Single Result Delete
exports.Result_Single_Delete = asyncHandler((req, res, next) => {
        res.send('Single result account deleted')
});