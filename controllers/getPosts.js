const { default: mongoose } = require("mongoose");
const Post = require("../models/Post");

const getPosts = async (req, res) => {
	try {
		const page = req.params.page ? req.params.page : 1;
		const limit = req.params.perPage ? req.params.perPage : 20;
		const skip = limit * (page - 1);

		if (mongoose.Types.ObjectId.isValid(req.params.class_id)) {
			throw { status: 404, message: "Invalid class id" };
		}

		const posts = await Post.find({ class: class_id }).slice(skip, limit);

		res.status(200).json({ success: true, result: posts });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = getPosts;
