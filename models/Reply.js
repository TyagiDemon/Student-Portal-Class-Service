const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		comment: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment",
		},
	},
	{
		timestamps: true,
	}
);

const Reply = mongoose.model("Reply", replySchema);
module.exports = Reply;
