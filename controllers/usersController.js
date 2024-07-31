const User = require('../models/user');
const asyncHandler = require('express-async-handler');

// Display all Users Details
exports.All_Users_Home_Page = asyncHandler((req, res) => {
    res.send('Here is the homepage of all users');
});

// Display all Users Details
exports.User_All_Detaills = asyncHandler(async(req, res, next ) => {
   const allUsers = await User.find().sort({user_name:1}).exec();
    res.send(allUsers)
});

// Display of a single User Details
exports.User_Single_Detaills = asyncHandler(async(req, res, next ) => {
     const singleUserDetails = await User.findOne({user_id: req.params.user_id});
   if(!singleUserDetails){
    res.send(`No user with this id number ${req.params.user_id}`)
   }
   else
     res.send(singleUserDetails)
});

// Display of a single User Create
exports.User_Single_Create = asyncHandler(async(req, res, next ) => {
   const simple = req.body;
    const user = await User.findOne({user_id: req.body.user_id})
    if (user){
        res.json({
            message:`A user with this user id ${req.body.user_id} already exist`
        })
    return
}
const NewUser = await new User ({
 user_id: req.body.user_id,
 user_name: req.body.user_name,
 password: req.body.password,
 email_address: req.body.email_address,
 user_role: req.body.user_role,
 phone_number: req.body.phone_number,
 created_at: req.body.created_at,
 updated_at: req.body.updated_at
    })
NewUser.save().then((response) => {
    console.log(`new User saved to the database`)
    console.log(response)
    res.send(response)
})

});

// Display of a single User Put
exports.User_Single_Update = asyncHandler(async (req, res, next) => {
    try {
      const userUpdate = await User.findOne({ user_id: req.params.user_id });
  
      if (!userUpdate) {
        res.json({
          message: `User with this id ${req.params.user_id} is not found`,
        });
        return;
      } else if (
        userUpdate.user_id == req.body.user_id &&
        userUpdate.user_name == req.body.user_name &&
        userUpdate.user_role == req.body.user_role &&
        userUpdate.phone_number == req.body.phone_number &&
        userUpdate.password == req.body.password &&
        userUpdate.email_address == req.body.email_address 
        // userUpdate.created_at == req.body.created_at 
        // userUpdate.updated_at == req.body.updated_at
      ) {
        res.json({
          message: `No new changes made`,
        });
      } else {
        // Prepare the update object
        const updateObject = {
          user_id: req.body.user_id,
          user_name: req.body.user_name,
          user_role: req.body.user_role,
          phone_number: req.body.phone_number,
          password: req.body.password,
          email_address: req.body.email_address,
          created_at: req.body.created_at,
          updated_at: req.body.updated_at
        };
  
        // Update the user
        const updatedUser = await User.updateOne(
          { user_id: req.params.user_id },
          updateObject
        );
  
        if (updatedUser) {
          res.send(`User details have been updated successfully`);
        } else {
          res.send(`Failed to update user details`);
        }
      }
    } catch (error) {
      next(error);
    }
  });
  
// Display of Single User Delete
exports.User_Single_Delete = asyncHandler(async(req, res, next) => {
      try{const deleteUser = await User.findOne({user_id: req.params.user_id})
      if(!deleteUser){
        res.json({
          message: `User with this id ${req.params.user_id} is not in the database`
        });
      } else {
        const deletedUser = await User.deleteOne({user_id: req.params.user_id});
        res.json ({ message: `The user with this id ${req.params.user_id} is deleted successfully`})
      }
    } catch(error){
      next(error);
    }
    });