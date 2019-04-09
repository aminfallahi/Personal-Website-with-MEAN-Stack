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


router.post('/', function (req,res,next)
{
    let msg = new Msg(req.body);
    msg.save()
    .then(msg => {
        res.status(200).json({'msg': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

 /* router.route('/contact').post((req, res) => {
    let msg = new Msg(req.body);
    msg.save()
        .then(msg => {
            res.status(200).json({'msg': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});*/


module.exports = router;