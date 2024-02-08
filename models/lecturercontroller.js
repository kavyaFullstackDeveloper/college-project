
const lecturermodel = require("../models/lecturermodel");

const isValidString = function(val){
    if (typeof val === "string" && val.trim().length === 0) return false;
    return true;
}

const addLect = async function(req, res){

    try{
        let data = req.body 

        let {lecturerName,lastname,lecturerId,subject,laboratory,availableAt} = data

        if (lecturerName === "undefined" || lecturerName == null || typeof(lecturerName) != 'string') return res.status(404).send("Lecturer name is required")
    
        if (lastname === "undefined" || lastname == null || typeof(lastname) != 'string') return res.status(404).send("Last name is required for the lecturer")
       
        
        if (lecturerId == null || !lecturerId) return res.status(404).send("Can not find a resource")

        if(subject == "undefined" || subject == null) return res.status(404).send("subject is required")
       
        if (laboratory == "undefined" || laboratory == null) return res.status(404).send("lab status is required")

        if (availableAt == "undefined" || availableAt == null) return res.status(404).send("Timings are required.")
    
       const join = await lecturermodel.create(data)
       return res.status(201).send({status: true, message: "Lecturer has been joined successfully", data: join})
    }

    catch(err){
        res.status(500).send({status: false, message: err.message})
    }
}



module.exports.addLect = addLect 