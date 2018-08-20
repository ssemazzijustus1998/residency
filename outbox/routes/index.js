var express = require('express');
const schools = require('../models/controller.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 var x = schools.getAll(res);
//  res.json()
  res.render('index', { title: 'Express', data:x });
});

module.exports = router;
