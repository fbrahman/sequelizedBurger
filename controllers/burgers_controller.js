const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', function (req, res) {
    db.burger.findAll({}).then(function (data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post('/', function (req, res) {
   db.burger.create(req.body).then(function(){
       res.redirect('/');
   })
});

router.put('/:id', function (req, res) {
    let burgerID = req.params.id;

    db.burger.update(req.body,{
        where:{
            id:burgerID
        }
    }).then(function(){
        res.redirect('/');
    })
});

module.exports = router;