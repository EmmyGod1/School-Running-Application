const Student = require('../models/student');
const asyncHandler = require('express-async-handler');

// Display all Students Details
exports.Student_All_Detaills = asyncHandler((req, res, next ) => {
    res.send('All students yet to be completed')
});

// Display of a single Student's Details
exports.Student_Single_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single student Detail to be completed')
});

// Display of a single Student Create
exports.Student_Single_Create = asyncHandler((req, res, next ) => {
    res.send('Single student create yet to be completed')
});

// Display of a single Subject Post
exports.Student_Single_Update = asyncHandler((req, res, next) => {
    res.send('Single student details is updated')
});

// Display of Single Subject Delete
exports.Student_Single_Delete = asyncHandler((req, res, next) => {
        res.send('Single student account deleted')
});