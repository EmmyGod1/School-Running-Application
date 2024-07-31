const Fee = require('../models/fee');
const asyncHandler = require('express-async-handler');

// Display all Fees Details
exports.All_Fee_Detaills = asyncHandler((req, res, next ) => {
    res.send('All fees yet to be completed')
});

// Display Single Class Fees Details
exports.Single_Class_Fee_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single Class fees yet to be completed')
});

// Display of a single Fee's Details
exports.Single_Student_Fee_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single strudent fee Detail to be completed')
});

// Display of a single Fee Create
exports.Single_Fee_Create = asyncHandler((req, res, next ) => {
    res.send('Single fee create yet to be completed')
});

// Display of a single Fee Post
exports.Single_Fee_Update = asyncHandler((req, res, next) => {
    res.send('Single fee details is updated')
});

// Display of Single Fee Delete
exports.Single_Fee_Delete = asyncHandler((req, res, next) => {
        res.send('Single result account deleted')
});