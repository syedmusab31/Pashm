const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const {env} = require("../config")

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

//POST api/v1/auth/signup
const Signup = async (req,res)=>{
    const {name,email,password} = req.body;
   try {
    if(!name || !email || !password){
        return res.status(400).json({success:false,message: "All fields are required"});
    }
    if(!isValidEmail(email)){
        return res.status(400).json({success:false,message: "Invalid email format"});
    }
    if(password.length<8){
        return res.status(400).json({success:false,message: "Password must be at least 8 characters long"});
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({success:false,message: "Email already in use"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({name,email,password:hashedPassword});
    await newUser.save();
    res.status(200).json({success:true,message: "User created successfully"});
   } catch (error) {
    res.status(500).json({success:false ,message: error.message});
   }
}


// POST api/v1/auth/login
const Login =  async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({success:false, message: "Email and password are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({success:false, message: "Invalid email" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({success:false, message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id }, env.JWT_SECRET_KEY, { expiresIn: '1d' });
        res.status(200).json({ success: true, message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
// POST api/v1/auth/logout
// const Logout = (req,res)=>{
//     res.status(200).json({success:true,message: "Logout successful"});
// }

module.exports = {
    Login,
    Signup
   //Logout
};
