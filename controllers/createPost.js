const Post = require("../models/Post.js");

const createPost = async (req, res) => {
	try {
		const newPost = Post.create({
			title: req.body.title,
			content: req.body.content,
			author: req.body.author_id,
			class: req.body.class_id,
		});

		await newPost.save();
		res.status(201).json({
			success: true,
			result: newPost,
		});
	} catch (err) {
		res.status(err.status || 500).json({
			success: false,
			message: err.message || "Something went wrong",
		});
	}
};

module.exports = createPost;
