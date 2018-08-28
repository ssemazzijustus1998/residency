const express = require("express");
const bodyParser = require("body-parser");
const engine = require('consolidate');



const {mongoose} = require("./db.js");
var employeeController = require("./controllers/employeeController.js");


var app = express();
app.engine('html',engine.nunjucks);
app.set('view engine', 'html');
app.set('views',__dirname+"/views");
app.use(express.static("public"));

app.use(bodyParser.json());
app.listen(3000,() =>console.log("server started at port : 3000"));
app.get('/',(req,res)=>{
  res.render('main',{title:"NODE JS"})
});
 app.use("/employees",employeeController);
