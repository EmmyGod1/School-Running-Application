const Teacher = require('../models/teacher');
const asyncHandler = require('express-async-handler');

// Display all Teachers Details
exports.Teacher_All_Detaills = asyncHandler(async(req, res, next ) => {
    const allTeachers = await Teacher.find().sort({first_name:1}).exec();
    res.send(allTeachers)});

// Display of a single Teacher Details
exports.Teacher_Single_Detaills = asyncHandler(async(req, res, next ) => {
    const singleTeacherDetail = await Teacher.findOne({teacher_id:req.params.teacher_id});
    if(!singleTeacherDetail){
        res.send(`No teacher with this id ${req.params.teacher_id} is found!!`)
    }
    else
    res.send(singleTeacherDetail);
});

// Display of a single Teacher Create
exports.Teacher_Single_Create = asyncHandler(async(req, res, next ) => {
    const teacher = await Teacher.findOne({teacher_id: req.body.teacher_id})
    if (teacher){
        res.json({
            message:`A teacher with this id ${req.body.teacher_id} already exist`
        })
    return
}
const newTeacher = await new Teacher ({
 user: req.body._id,
 teacher_id: req.body.teacher_id,
 first_name: req.body.first_name,
 last_name: req.body.last_name,
 hire_date: req.body.hire_date,
 created_at: req.body.created_at,
 updated_at: req.body.updated_at
    })
newTeacher.save().then((response) => {
    console.log(`new Teacher saved to the database`)
    console.log(response)
    res.send(response)
})

});

// Display of a single Teacher Post
exports.Teacher_Single_Update = asyncHandler(async(req, res, next) => {
    try{
        const singleTeacherUpdate = await Teacher.findOne({teacher_id: req.params.teacher_id})
    if(!singleTeacherUpdate) {
        res.send(`The teacher with this id ${req.params.teacher_id} does not exist`)
    }
    else if (singleTeacherUpdate.teacher_id == req.body.teacher_id &&
        singleTeacherUpdate.first_name == req.body.first_name &&
        singleTeacherUpdate.last_name == req.body.last_name 
        // singleTeacherUpdate.hire_date == req.body.hire_date
        )
        res.send(`No new changes made`)
        
        else {
const toBeUpdated = {
    teacher_id: req.body.teacher_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    hire_date: req.body.hire_date
};
const upDatedTeacher = await Teacher.updateOne({
    teacher_id: req.params.teacher_id
}, toBeUpdated)
if(toBeUpdated){
res.send(`The teacher's account with teacher ID ${req.params.teacher_id} is successfully updated`)
  }  
else {
    res.send(`Couldnt be updated`)
}}
    }
    catch(error){
        console.log(error)
    }
});

// Display of Single Teacher Delete
exports.Teacher_Single_Delete = asyncHandler(async(req, res, next) => {
        const teacherDelete = await Teacher.findOne({
            teacher_id: req.params.teacher_id
        })
        if(!teacherDelete) {
            res.send(`Teacher with this id ${req.params.teacher_id} does not exist in our records`)
        }
        else{
            const teacherDeleted = await Teacher.deleteOne({
                teacher_id: req.params.teacher_id
            })
            // return teacherDeleted
        res.send(`This teacher's account with id ${req.params.teacher_id} is deleted successfully`)
    }
});
