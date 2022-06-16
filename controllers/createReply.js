const Reply = require("../models/Reply.js");

const createReply = async (req, res) => {
	try {
		const newReply = Reply.create({
			content: req.body.content,
			author: req.headers.user_id,
			comment: req.body.comment_id,
		});

		await newReply.save();
		res.status(201).json({
			success: true,
			result: newReply,
		});
	} catch (err) {
		res.status(err.status || 500).json({
			success: false,
			message: err.message || "Something went wrong",
		});
	}
};

module.exports = createReply;
