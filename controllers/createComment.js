const Comment = require("../models/Comment.js");

const createComment = async (req, res) => {
	try {
		const newComment = Comment.create({
			content: req.body.content,
			author: req.body.author_id,
			post: req.body.post_id,
		});

		await newComment.save();
		res.status(201).json({
			success: true,
			result: newComment,
		});
	} catch (err) {
		res.status(err.status || 500).json({
			success: false,
			message: err.message || "Something went wrong",
		});
	}
};

module.exports = createComment;
