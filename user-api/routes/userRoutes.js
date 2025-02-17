const User = require('../model/user')
const express = require('express');

const router = express.Router();

//Get all users
router.get('/users', async(req,res)=>{
  
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
          res.status(500).json({message: error.message});
    }
});

//Get a user by id
router.get('/users/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:"user not found"});
        res.json(user);
    }catch(error){
        res.json({message: error.message});
    }
});
 
// create new user
router.post('/users',async(req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    }catch(error){
        res.json({message:error.message});
    }
});
 
//delete a user by id
router.delete('/users/:id', async(req,res)=>{
    try{
       const deletedUser =  await User.findByIdAndDelete(req.params.id);
       if(!deletedUser) return res.status(404).json({message:"User not found"});
       res.json(deletedUser);
    }catch(error){
      res.json({message:error.message});
    }
});

module.exports = router;