const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    studentName: String,
    lastname: String,
    parentName: String,
    title: {
        type: String,
        enum: ['Mr', 'Mrs', 'Miss']
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    studentId: {
        type: String,
        required: true 
    },
    course:{
        type: String,
        required: true,
        enum: ['M.P.C', 'M.E.C', 'M.S.Cs', 'M.P.Cs']
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('student', studentSchema)