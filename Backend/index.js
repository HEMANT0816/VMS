const express =require("express");

const DB=require("./config/database")

const app=express();


const Port=3000;


//listen my server

DB.connect().then(()=>{
console.log("DataBase Connect Successfully")
app.listen(Port,(req,res)=>{
console.log('app is listending on the port number '+Port)
})
}).catch((err)=>{
    console.log("Error in DB Connection "+err.message)
})

