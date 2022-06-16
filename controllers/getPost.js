const Post = require("../models/Post");

const getPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (!post) {
			throw { status: 404, message: "Post not found" };
		}
		res.status(200).json({ success: true, result: post });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = getPost;
