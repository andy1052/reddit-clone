/*
*
*
*	Mongoose connection to MongoDB
*
*/

//	Dependencies:
const mongoose = require('mongoose');
const assert = require('assert');

const url = 'mongodb://localhost/reddit';

mongoose.Promise = global.Promise;

mongoose.connect(url, {useNewUrlParser: true}, function(err, db) {
	assert.equal(null, err);
	console.log('Connected successfully to the database!');

	//db.close(); //REOPRN THIS FOR PRODUCTION!!!
});

mongoose.connection.on('error', console.error.bind(console, "MongoDB connection Error:"));

mongoose.set('debug', true);

module.exports = mongoose.connection;