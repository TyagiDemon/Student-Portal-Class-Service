const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		},
	},
	{
		timestamps: true,
	}
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
