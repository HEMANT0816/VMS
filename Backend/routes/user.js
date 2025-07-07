const express=require("express");

const  Router=express.Router();

//import the controller

const {userSignUp,userLogin}=require("../controller/user")

//creates routes

Router.post("/signup",userSignUp);
Router.post("/login",userLogin);

module.exports=Router; 