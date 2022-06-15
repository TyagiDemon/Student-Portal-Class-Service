const { default: mongoose } = require("mongoose");
const Comment = require("../models/Comment");

const getComments = async (req, res) => {
	try {
		const page = req.params.page ? req.params.page : 1;
		const limit = req.params.perPage ? req.params.perPage : 20;
		const skip = limit * (page - 1);

		if (mongoose.Types.ObjectId.isValid(req.params.post_id)) {
			throw { status: 404, message: "Invalid post id" };
		}

		const comments = await Comment.find({ post: post_id }).slice(skip, limit);

		res.status(200).json({ success: true, result: comments });
	} catch (err) {
		res.status(err.status || 500).json({
			success: false,
			message: err.message || "Someething went wrong",
		});
	}
};

module.exports = getComments;
