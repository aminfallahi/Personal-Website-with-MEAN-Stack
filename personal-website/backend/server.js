import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Msg from './models/Msg';

//Define Routes
//import Profile from './routes/Profile'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pw');
//mongoose.connect('mongodb+srv://CSE775:775@cluster0-u4bmz.mongodb.net/test?retryWrites=true');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router); //Applies the routes to our application

//Defining Routes
//app.use('/Profile', Profile);


/* If you want to run middleware that will run on every request */

/*router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});*/


/*Routing with parameters*/
/*router.get('/test/:name', function(req, res) {
    res.send('test ' + req.params.name + '!');
});*/


//Later on We should partition this into its seperate folder called routes to cleanup this code
//Get
router.route('/msgs').get((req, res) => {
    Msg.find((err, msgs) => {
        if (err)
            console.log(err);
        else
            res.json(msgs);
    });
});

//Post
//Curl Command to test
//curl -i -X POST -H "Content-Type:application/json" -d "{\"subject\":\"HiTesting775\",\"email\":\"Test@gmail.com\",\"body\":\"Testing for cse775\"}" http://localhost:4000/contact
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
