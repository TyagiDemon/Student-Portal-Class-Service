const { default: mongoose } = require("mongoose");
const Reply = require("../models/Reply");

const getReplies = async (req, res) => {
	try {
		const page = req.params.page ? req.params.page : 1;
		const limit = req.params.perPage ? req.params.perPage : 20;
		const skip = limit * (page - 1);

		if (mongoose.Types.ObjectId.isValid(req.params.comment_id)) {
			throw { status: 404, message: "Invalid comment id" };
		}

		const replies = await Reply.find({ comment: comment_id }).slice(skip, limit);

		res.status(200).json({ success: true, result: replies });
	} catch (err) {
		res.status(err.status || 500).json({
			success: false,
			message: err.message || "Someething went wrong",
		});
	}
};

module.exports = getReplies;
