require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');

const MONGO_URL = process.env.MONGO_URL

const DB = () => {
    try{
        mongoose.connect(MONGO_URL)
        console.log('Mongodb connection successsful');
    }catch(err){
        console.log(err.message);
    }
}

module.exports = DB;
