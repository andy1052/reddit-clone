/*
*
*
*	Post Route
*
*/

//	Dependencies:
const Post = require('../models/post');


module.exports = (app) => {
	//	Create
	app.post('/posts/new', (req,res) => {
		console.log(req.body);
		let post = new Post(req.body);

		post.save().then((done) => {
			console.log(done);
		});
	});
};