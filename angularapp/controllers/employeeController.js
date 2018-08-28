const express = require('express');
var router = express .Router();
var ObjectId  = require('mongoose').Types.ObjectId;

 var { Employee}= require('../models/employee');

 //=>localhost: 3000/employee
  router.get('/', (req,res) =>{
    Employee.find((err,docs) =>{
      if(!err){res.send(docs);}
        else {  console.log('Error in Retrieving Employees :' +JSON.stringify(err, undefined,2));}
    });
  });
  router.get('/:id', (req,res) =>{
        if(!ObjectId.isValid(req.params.id))
            return res.status(404).send('No record with given id: ${rep.params.id}');

            Employee.findById(req.params.id, (err, doc) => {
        if(!err){res.send(doc);}
          else{console.log('Error in Retrieving Employee:' +JSON.stringify(err, undefined,2));}
        });

        });

  router.post('/', (req, res) =>{
    var emp = new Employee({
      name:req.body.name,
      position:req.body.position,
      office:req.body.office,
      salary:req.body.salary,

    });
    emp.save((err, doc)=>{
      if(!err){res.send(doc);}
      else{console.log('Error in employee save:' +JSON.stringify(err, undefined,2));}
      });
    });

//put method
    router.put('/:id', (req,res) =>{
          if(!ObjectId.isValid(req.params.id))
              return res.status(404).send('No record with given id: ${rep.params.id}');

              var emp = {
                name:req.body.name,
                position:req.body.position,
                office:req.body.office,
                salary:req.body.salary,

                };
              Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true}, (err, doc) => {
          if(!err){res.send(doc);}
            else{console.log('Error in  Employee Update:' +JSON.stringify(err, undefined,2));}
          });

          });

//delete methode

router.put('/:id', (req,res) =>{
      if(!ObjectId.isValid(req.params.id))
          return res.status(404).send('No record with given id: ${rep.params.id}');

          Employee.findByIdAndRemove(req.params.id,  (err, doc) => {
      if(!err){res.send(doc);}
        else{console.log('Error in  Employee delete:' +JSON.stringify(err, undefined,2));}
      });

      });




 module.exports= router;
