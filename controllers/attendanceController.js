const Attendance = require('../models/attendance');
const asyncHandler = require('express-async-handler');

// Display all Attendance Details
exports.All_Attendance_Detaills = asyncHandler((req, res, next ) => {
    res.send('All attendance yet to be completed')
});

// Display Single Events Details
exports.Single_Attendance_Detaills = asyncHandler((req, res, next ) => {
    res.send('Single attendance details yet to be completed')
});

// Display of a single Attendance Create
exports.Single_Attendance_Create = asyncHandler((req, res, next ) => {
    res.send('Single attendance create yet to be completed')
});

// Display of a single Attendance Post
exports.Single_Attendance_Update = asyncHandler((req, res, next) => {
    res.send('Single attendance details is updated')
});

// Display of Single Attendance Delete
exports.Single_Attendance_Delete = asyncHandler((req, res, next) => {
        res.send('Single attendance details deleted')
});

