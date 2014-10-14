var express = require('express');
var router = express.Router();

/*
var Download = require('../model/download');

var doc = { title : 'emtity_demo_title'};
var mongooseEntity = new Download(doc);

mongooseEntity.save(function(err){

    console.log(err);

});
*/

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
