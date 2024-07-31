const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/usersController');
const teacher_controller = require('../controllers/teachersController');
const subject_controller = require('../controllers/subjectsController');
const student_controller = require('../controllers/studentsControllers');
const result_controller = require('../controllers/resultsController');
const fees_controller = require('../controllers/feesController');
const exams_controller = require('../controllers/examsController');
const events_controller = require('../controllers/eventsController');
const classes_controller = require('../controllers/classesController');
const attendance_controller = require('../controllers/attendanceController');
const announcements_controller = require('../controllers/announcementsController');

// Users routes

// get Users home page
router.get('/', user_controller.All_Users_Home_Page);

// Routes for all the application users list
router.get('/allUsers', user_controller.User_All_Detaills);

// route for single user details
router.get('/users/:user_id', user_controller.User_Single_Detaills);

// route for single user create
router.post('/users/create', user_controller.User_Single_Create);

// route for single user update
router.put('/users/:user_id',user_controller.User_Single_Update );

// route for single user delete record
router.delete('/users/:user_id', user_controller.User_Single_Delete);


   //    Students route

// Routes for all students list
router.get('/allStudents', student_controller.Student_All_Detaills);

// route for single Student details
router.get('/student/:id', student_controller.Student_Single_Detaills);

// route for single student create
router.post('/student/:id', student_controller.Student_Single_Create);

// route for single student update
router.put('/student/:id', student_controller.Student_Single_Update);

// route for single user delete record
router.delete('/student/:id', student_controller.Student_Single_Delete);


   //    Teachers Route

// Routes for all teachers list
router.get('/allTeachers', teacher_controller.Teacher_All_Detaills);

// route for single teacher's details
router.get('/teacher/:teacher_id', teacher_controller.Teacher_Single_Detaills);

// route for single teacher create
router.post('/teacher/create', teacher_controller.Teacher_Single_Create);

// route for single teacher's update
router.put('/teacher/:teacher_id', teacher_controller.Teacher_Single_Update);

// route for single teacher delete record
router.delete('/teacher/:teacher_id', teacher_controller.Teacher_Single_Delete);

 
   //    Classes Route

// Routes for all Classes list
router.get('/allClasses', classes_controller.All_Class_Detaills);

// route for single class's details
router.get('/class/:id', classes_controller.Single_Class_Detaills);

// route for single class create
router.post('/class/:id', classes_controller.Single_Class_Create);

// route for single class's update
router.put('/class/:id', events_controller.Single_Event_Update);

// route for single class delete record
router.delete('/class/:id', events_controller.Single_Event_Delete);


//    Subjects Route

   // Routes for all Subjects list
   router.get('/allSubjects', subject_controller.Subject_All_Detaills);
   
   // route for single Subjects's details
   router.get('/subject/:id', subject_controller.Subject_Single_Detaills);
   
   // route for single Subject create
   router.post('/subject/:id', subject_controller.Subject_Single_Create);
   
   // route for single subject's update
   router.put('/subject/:id', subject_controller.Subject_Single_Update);
   
   // route for single subject delete record
   router.delete('/subject/:id', subject_controller.Subject_Single_Delete);


//    Attendance Route

   // Routes for all Attendance list
   router.get('/allAttendance', attendance_controller.All_Attendance_Detaills);

// route for single Attendance's details
router.get('/attendance/:id', attendance_controller.Single_Attendance_Detaills);

// route for single attendance create
router.post('/attendance/:id', attendance_controller.Single_Attendance_Create);

// route for single attendance's update
router.put('/attendance/:id', attendance_controller.Single_Attendance_Update);

// route for single attendance delete record
router.delete('/attendance/:id', attendance_controller.Single_Attendance_Delete);


//    Exams Route

   // Routes for all Exams Papers
   router.get('/allExamPapers', exams_controller.All_Exams_Detaills);

// route for single Exam's details
router.get('/examPaper/:id', exams_controller.Single_Exams_Detaills);

// route for single ExamPaper create
router.post('/examPaper/:id', exams_controller.Single_Exam_Create);

// route for single examPaper's update
router.put('/examPaper/:id', exams_controller.Single_Exam_Update);

// route for single examPaper delete record
router.delete('/examPaper/:id', exams_controller.Single_Exam_Delete);


//    Results Route

   // Routes for all School Results
   router.get('/allResultsRecord', result_controller.Result_All_Detaills);

// Routes for Each Class Results
router.get('/singleClassAllResultsRecord/:id', result_controller.Result_Single_Class_Detaills);

// route for single Student's Result details
router.get('/singleStudentResult/:id', result_controller.Result_Single_Student_Detaills);

// route for single Student's Result create
router.post('/studentResult/:id', result_controller.Result_Single_Create);

// route for single Student's Result update
router.put('/studentResult/:id', result_controller.Result_Single_Update);

// route for single Student's Result delete record
router.delete('/studentResult/:id', result_controller.Result_Single_Delete);


   //    School Events Route

   // Routes for all School Events Record
   router.get('/allSchoolEvents', events_controller.All_Events_Detaills);

// route for Single Events details
router.get('/allYearEvents/:id', events_controller.Single_Event_Detaills);
   
// route for single events create
router.post('/newEvent/:id', events_controller.Single_Event_Create);

// route for single Event update
router.put('/newEvent/:id', events_controller.Single_Event_Update);

// route for single Event delete record
router.delete('/newEvent/:id', events_controller.Single_Event_Delete);


   //    School Fees Route

   // Routes for all School Fees Record
   router.get('/allSchoolFees', fees_controller.All_Fee_Detaills);

// route for Single Class Fees details
router.get('/singleClassFees/:id', fees_controller.Single_Class_Fee_Detaills);

// route for single student Fee's details
router.get('/singleStudent/:id', fees_controller.Single_Student_Fee_Detaills);
   
// route for single Student Fee create
router.post('/singleStudent/:id', fees_controller.Single_Fee_Create);

// route for single Student Fee's update
router.put('/singleStudent/:id', fees_controller.Single_Fee_Update);

// route for single Event delete record
router.delete('/singleStudent/:id', fees_controller.Single_Fee_Delete);


//    School Announcement Route

   // Routes for all School Announcement Record
   router.get('/allSchoolAnnouncement', announcements_controller.All_Announcement_Detaills);

// route for Single Class Announcement details
router.get('/singleClassAnnouncements/:id', announcements_controller.Single_Announcement_Detaills);
   
// route for single announcement create
router.post('/singleAnnouncement/:id', announcements_controller.Single_Announcement_Create);

// route for single Student Fee's update
router.put('/singleAnnouncement/:id', announcements_controller.Single_Announcement_Update);

// route for single Event delete record
router.delete('/singleAnnouncement/:id', announcements_controller.Single_Announcement_Delete);


module.exports = router; // Export the router
