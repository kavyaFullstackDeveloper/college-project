const express = require('express');
const { route } = require('..');
const router = express.Router();
const studentcontroller = require('../models/studentcontroller');
const lecturercontroller = require('../models/lecturercontroller');

router.post('/add-student', studentcontroller.addStudent)
router.get('/get-student', studentcontroller.getStudent)

router.post('/add-lect', lecturercontroller.addLect)

module.exports = router 