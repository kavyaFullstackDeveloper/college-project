const studentmodel = require("./studentmodel")

const isEmpty = function(value){
    if(typeof value === "undefined" || value === null) return false;
    if(typeof value === "string" && value.trim().length === 0) return false;
    return true;
}

const isValidName = function(name){
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}


// const isValidId = function (password) {
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//     return passwordRegex.test(password);
// }

const addStudent = async function(req,res){
    try{
      let student =  req.body 
      
      if(Object.keys(student).length ==0)
      return res.status(400).send({status: true, message: "Fields are mandatory."})
    
      let {studentName, lastname, title,studentId,  phoneNumber, address} = student 

      if(!isEmpty(studentName)){
        return res.status(400).send({status: false, message: "Student name is required."})
      }
      if(!isEmpty(lastname)){
        return res.status(400).send({status: false, message: "Last name is required."})
      }
      if (!isEmpty(title)){
        return res.status(400).send({status: false, message: "title is required"})
      }
      if (!isEmpty(studentId)){
        return res.status(400).send({status: false, message: "Student Id is required."})
      }
      if (!isEmpty(phoneNumber)){
        return res.status(400).send({status: false, message: "Phone number is required."})
      }
      if (!isEmpty(address)){
        return res.status(400).send({status: false, message: "address is required."})
      }

      if (!isValidName(studentName)){
        return res.status(400).send({status: false, message: "Name is required"})
      }
      if(!isValidName(lastname)){
        return res.status(400).send({status: false, message:"last name is required"})
      }
      // if (!isValidId(studentId)){
      //   return res.status(400).send({status: false, message: "Student id is invalid, please enter a valid id"})
      // }
     
      const studId = await studentmodel.findOne({studentId: studentId});

      if(studId) 
      return res.status(400).send({status: false, message: "Student arealy exists"})

      const create = await studentmodel.create(student)
      return res.status(201).send({status: true, message: "Student admitted successfully.", data: create})

    }
    catch (err){
        res.status(500).send({status: false, message: err.message})
    }
}

const getStudent = async function(req, res){
    let allStudents = await studentmodel.find({studentName: "", lastname: ""});
    console.log(allStudents) 

if (allStudents.length > 0) res.send({msg: allStudents,condition: true })
else res.send({msg: "No students found", condition: false})
res.send({msg: allStudents})
}


module.exports.addStudent = addStudent 
module.exports.getStudent = getStudent 