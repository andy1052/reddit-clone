/*
*
*
*	Server for reddit app
*
*
*/

//	Dependencies:
const express = require('express');
const bodyParser = require('body-parser');

//	Local Dependencies:


//	Initiate app:
const app = express();

//	Load in template engine:
app.set('view engine', 'hbs');

//	Use body parser:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(expressValidator()); //	Add after Body Parser!


//	Home route:
app.get('/', (req,res) => {
	res.render('index.hbs');
});



//	Post route:
app.get('/posts/new', (req, res) => {
	res.render('posts-new.hbs');
});

//	Set DB:
require('./data/reddit-db');

//	Post submit
require('./controllers/posts.js')(app);





//	Test route:
app.get('/ping', (request, response) => {
	response.send('pong');
});








//	Listen on port 3000:
app.listen(3000, () => {
	console.log('server running on port 3000');
});