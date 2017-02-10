var express = require('express');
var router = express.Router();
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn, function(req,res){
    db.child.find({
        where: {
            id: req.child.id
        },
        include: [db.chore]
    }).then(function(child) {
        res.render('user', {
            child: child
        });
    });
});

module.exports = router;
