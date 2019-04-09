import express from 'express';
let router = express.Router();
import mongoose from 'mongoose';
import Msg from '../models/Msg.js';;








router.get('/', function(req, res, next) {
    Msg.find((err, msgs) => {
        if (err) 
        console.log(err)
      else
        res.json(msgs);
    });
  });




  



  module.exports = router;
