var mongoose = require( 'mongoose' );
//creating a connection between mongoose and mongodb
var dbURI = "mongodb://localhost/dashboard";
mongoose.connect(dbURI);
//Monitoring for succesful connection through Mongoose
mongoose.connection.on("connected", function(){
  console.log("Mongoose connected  to" +dbURI);
});
//checking for connection error
mongoose.connection.on("error",function (err){
  console.log("Mongoose connection error: " + err);
});
//checking for disconnection event
mongoose.connection.on("disconnected",function(){
  console.log("Mongoose disconnected");
});
//define function to accept message and call back function
var gracefulShutdown = function (msg,callback){
  //close  the mongooose connection, passingthru an anonymous fuction to run when closed
  mongoose.connection.close(function(){
    //output message and callback when mongoose connection is closed
    console.log("Mongoose disconnected through" + msg);
    callback();
  });
};

//listen for SIGUSRS , which is what nodemon users
process.once ("SIGUSRS2", function(){
  //send message to gracefull shutdown and callback to kill process, emitting SIGUSR2
  gracefulShutdown("nodemon restart",function(){
    process.kill(process.pid, "SIGUSR2");
  });
});

//COMPLETE DATABASE CONNECTION FILE db.js IN MODELS
//Define database connectin string and use it to open mongoose disconnection
var mongoose = require ("mongoose");
var gracefulShutdown;
var dbURI = "mongoDB;//localhost/outbox";
mongoose.connect(dbURI);

//listen for  mongoose connection events and output statuses to console
mongoose.connection.on("connected", function(){
  console.log("Mongoose connected to "+ dbURI);
});
mongoose.connection.on("error",function(err){
  console.log("Mongoose connection error: "+ err);
});
mongoose.connection.on("disconnected",function(){
  console.log("Mongoose disconnected");
});
//reusable function to close mongoose CONNECTION
gracefullShutdown= function(msg, callback){
  mongoose.connection.close(function(){
    console.log("Mongoose disconnected through" +msg);
    callback();
  });
};
// for nodemon restarts
process.once("SIGINT",function(){
  gracefulShutdown("SIGINT", function(){
    gracefulShutdown("nodemon restart ", function(){
      process.exit(0);
    });
  });
  //for app termination
  process.on("SIGINT",function(){
    gracefulShutdown("app termination", function(){
      process.exit(0);
    });
  });
});
