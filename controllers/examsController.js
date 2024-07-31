const Exam = require('../models/exam');
const asyncHandler = require('express-async-handler');

// Display all Exams Details
exports.All_Exams_Detaills = asyncHandler((req, res, next ) => {
    res.send('All exams yet to be completed')
});

// Display Single Class Fees Details
exports.Single_Exams_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single exam details yet to be completed')
});

// Display of a single exam Create
exports.Single_Exam_Create = asyncHandler((req, res, next ) => {
    res.send('Single exam create yet to be completed')
});

// Display of a single Exam Post
exports.Single_Exam_Update = asyncHandler((req, res, next) => {
    res.send('Single exam details is updated')
});

// Display of Single Exam Delete
exports.Single_Exam_Delete = asyncHandler((req, res, next) => {
        res.send('Single Exam account deleted')
});