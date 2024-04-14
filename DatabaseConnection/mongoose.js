const mongoose = require('mongoose');
const express = require('express');

const DB = () => {
    try{
        mongoose.connect('mongodb+srv://manikantakatakam:manikantakatakam@freeapi.otpjiys.mongodb.net/?retryWrites=true&w=majority&appName=FreeApi')
        console.log('Mongodb connection successsful');
    }catch(err){
        console.log(err.message);
    }
}

module.exports = DB;
