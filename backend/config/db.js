const express= require('express');
const mongoose = require('mongoose');
const {env} = require('./env')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.MONGO_URI);
        console.log('MongoDB Connected');
        
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
}

module.exports = {connectDB};