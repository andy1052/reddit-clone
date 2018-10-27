/*
*
*
*	Server for reddit app
*
*
*/

//	Dependencies:
const express = require('express');

//	Initiate app:
const app = express();

//	Load in template engine:
app.set('view engine', 'hbs');


//	Test route:
app.get('/ping', (request, response) => {
	response.send('pong');
});


//	Listen on port 3000:
app.listen(3000, () => {
	console.log('server running on port 3000');
});