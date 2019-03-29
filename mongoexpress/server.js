const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
var db

MongoClient.connect('mongodb://127.0.0.1:27017/',{useNewUrlParser:true},(err, client) => {
	if (err) return console.log(err)
	db = client.db('myapp') 
	app.listen(3000, function() {
		console.log('listening on 3000')
	})
})

app.get('/', (req, res) => {
	//res.send('Hello World')
	/*var cursor = db.collection('msgs').find()
	db.collection('msgs').find().toArray(function(err, results) {
		console.log(results)
	})*/
	res.sendFile(__dirname + '/index.html')
})
app.post('/msgs', (req, res) => {
	//res.sendFile(__dirname + '/index.html')
	console.log(req.body)
	db.collection('msgs').save(req.body, (err, result) => {
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/')
	})
})
app.get('/msgs', (req, res) => {
	db.collection('msgs').find().toArray((err, result) => {
		if (err) return console.log(err)
		// renders index.ejs
		res.render('index.ejs', {msgs: result})
	})
})
