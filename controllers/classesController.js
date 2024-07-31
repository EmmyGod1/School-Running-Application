const Class = require('../models/class');
const asyncHandler = require('express-async-handler');

// Display all Classes Details
exports.All_Class_Detaills = asyncHandler((req, res, next ) => {
    res.send('All classes details yet to be completed')
});

// Display of a single Student's Details
exports.Single_Class_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single class Detail to be completed')
});

// Display of a single Student Create
exports.Single_Class_Create = asyncHandler((req, res, next ) => {
    res.send('Single class create yet to be completed')
});

// Display of a single Subject Post
exports.Single_Class_Update = asyncHandler((req, res, next) => {
    res.send('Single class details is updated')
});

// Display of Single Subject Delete
exports.Single_Class_Delete = asyncHandler((req, res, next) => {
        res.send('Single class account deleted')
});