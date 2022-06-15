const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
		},
		files: [{ type: String }],
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		class: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
