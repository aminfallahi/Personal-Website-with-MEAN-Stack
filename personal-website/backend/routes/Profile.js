//var express = require('express');
//var router = express.Router();
//var mongoose = require('mongoose');
//var Profile = require('../models/Profile.js');

import express from 'express';
let router = express.Router();

import mongoose from 'mongoose';
import Profile from '../models/Profile.js';;

/* GET ALL Profile */
router.get('/', function(req, res, next) {
  Profile.find((err, products) =>{
    if (err) return next(err);
    res.json(products);
  });
});




/* GET SINGLE Profile BY ID */
router.get('/:id', function(req, res, next) {
  Profile.findById(req.params.id, (err, post) =>{
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Profile */
router.post('/', function(req, res, next) {
   
    var newProfile = new Profile(req.body);
    newProfile.save().then(item => {res.json(newProfile)})
    .catch(err=>{res.status(400).send("save failed");
}); 


  Profile.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Profile */
router.put('/:id', function(req, res, next) {
  Profile.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Profile */
router.delete('/:id', function(req, res, next) {
  Profile.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;