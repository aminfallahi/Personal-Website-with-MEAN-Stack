//var express = require('express');
//var router = express.Router();
//var mongoose = require('mongoose');
//var Profile = require('../models/Profile.js');

import express from 'express';
let router = express.Router();

import mongoose from 'mongoose';
import Interest from '../models/Interest.js';;

/* GET ALL Interests */
router.get('/', function(req, res, next) {
  Interest.find((err, interest) =>{
    if (err) return next(err);
    res.json(interest);
  });
});




/* GET SINGLE Interest BY ID */
router.get('/:id', function(req, res, next) {
  Interest.findById(req.params.id, (err, post) =>{
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Interest */
router.post('/', function(req, res, next) {
   
    let interest = new Interest(req.body);
    interest.save()
    .then(interest => {
        res.status(200).json({'interest': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

/* UPDATE Interest */
router.put('/:id', function(req, res, next) {
  Interest.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Interest */
router.delete('/:id', function(req, res, next) {
  Interest.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
