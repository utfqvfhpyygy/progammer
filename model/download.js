var mongoose = require('mongoose');
var config   = require('../conf/config.js');

mongoose.connect(config.dev.dburl,function(err){

    if(err) throw err;

});

var downSchema = new mongoose.Schema({

    title:String


});

module.exports = mongoose.model('download',downSchema);