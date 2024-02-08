const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
    lecturerName: String,
    lastname: String,
    title:{
        type: String,
        enum: ["Mr", "Miss", "Mrs"]
    },
    email: {
        type: String,
        unique: true,
        required: true 
    },
    lecturerId: {
        unique: true,
        type: String,
        required: true 
    },
    subject:{
        type: String,
        enum: ['Maths', 'Physics', 'Chemistry', 'Electronics', 'Statistics', 'Computers'],
        required: true 
    }, 
    laboratory:{
        type: Boolean,
        required: true
    },
    availableAt:{
        type: String,
        required: true 
    }
});

const lecturer = mongoose.model('lecturer', lecturerSchema);

module.exports = lecturer; 

