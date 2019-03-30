import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Msg from './models/Msg';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pw');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

router.route('/msgs').get((req, res) => {
    Msg.find((err, msgs) => {
        if (err)
            console.log(err);
        else
            res.json(msgs);
    });
});

router.route('/contact').post((req, res) => {
    let msg = new Msg(req.body);
    msg.save()
        .then(msg => {
            res.status(200).json({'msg': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

app.listen(4000, () => console.log(`Express server running on port 4000`));
