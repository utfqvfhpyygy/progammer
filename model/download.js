var mongoose = require('mongoose');
var config   = require('../conf/config.js');

var db = mongoose.createConnection(config.dev.dburl,function(err){

    if(err) throw err;

    console.log("start connect db");

});

var downSchema = new mongoose.Schema({

    uid:{type:Number},
    addTime:{type:Date, default: Date.now},
    title:{type:String,default:'ken'},
    detail:{type:String,default:null},
    love:{type:Number,default:1},
    sid:{type:Number,default:1},
    url:{type:String,default:null}
});

module.exports = db.model('download',downSchema);