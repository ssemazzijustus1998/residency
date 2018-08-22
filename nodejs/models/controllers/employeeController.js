const express = require("express");
var router = express.Router();
var {Employee} = require("../models/employee");
router.get("/",(req , res)=>{
  Employee.find((err,res)=>{
   if(!err){res.send(docs);}
   else{console.log("Erro in retriving Employees :"+ JSON.stringify(err, undefined,2));}
 });
});
