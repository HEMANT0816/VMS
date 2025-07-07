const { validationForVisitor } = require("../helper/visitor");
const Visitor =require("../model/visitor");

const createVisitor=(req,res)=>{
    try {
        //to prevent from user to make changed in status or checkIntime
        const {fullName,email,phoneNumber,whomToMeet,departementToVisit,purposeToVisit}=req.body;

        validationForVisitor(req);

        const visitor =new Visitor({fullName,email,phoneNumber,whomToMeet,departementToVisit,purposeToVisit});

        visitor.save();
        
    } catch (error) {
        res.json(500).json({
            message:"error during creation of visitor due to->"+error.message,
        })
    }
}