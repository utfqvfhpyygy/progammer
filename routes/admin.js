var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {

    res.render('admin', { title: 'Express' });
});


router.post('/save',function(req,res){



     var Download = require('../model/download');

     var title  = req.param('title');
     var detail = req.param('detail');
     var url    = req.param('url');
     var uid    = req.param('uid');

     var doc = { title : title,uid: uid,detail:detail,url:url};
     var mongooseEntity = new Download(doc);

     mongooseEntity.save(function(err){
        console.log(err);
     });


    //console.log(req);
    res.write("ok");
    res.end();
});


module.exports = router;