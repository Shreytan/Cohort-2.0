const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shreyanshshukla7:0SEA32iH5nU5mAXm@cluster0.ivw5f.mongodb.net/");

const UserSchema = new mongoose.Schema({
    email: String,
    password : String,
    purchased_courses : [{
        ref : 'course'
    }]

})

const CourseSchema = new mongoose.Schema({
    course_name : String,
    course_id :  Number
})