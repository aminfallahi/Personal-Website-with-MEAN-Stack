//var express = require('express');
//var router = express.Router();
//var mongoose = require('mongoose');
//var Profile = require('../models/Profile.js');

import express from 'express';
let router = express.Router();

import mongoose from 'mongoose';
import Project from '../models/Project.js';;

/* GET ALL Projects */
router.get('/', function(req, res, next) {
  Project.find((err, project) =>{
    if (err) return next(err);
    res.json(project);
  });
});




/* GET SINGLE Project BY ID */
router.get('/:id', function(req, res, next) {
  Project.findById(req.params.id, (err, post) =>{
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Project */
router.post('/', function(req, res, next) {
   
    var newProject = new Project(req.body);
    newProject.save().then(item => {res.json(newProject)})
    .catch(err=>{res.status(400).send("save failed");
}); 


  Project.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Project */
router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Project */
router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
