const mongoose = require ("mongoose");
//connecting mongo DB
mongoose.connect("mongodb://localhost:27017/CrudDB",(err) =>{
  if(!err)
  console.log("MongoDB connection succeeded...");
  else
    console.log("error in DB connection : " +JSON.stringify(err, undefined,2));
  });
  module.exports = mongoose;
