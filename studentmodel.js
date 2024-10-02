const mongoose = require('mongoose');
const { type } = require('os');

const sstudent = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

});

const studentb = mongoose.model('student',sstudent);

module.exports = studentb;