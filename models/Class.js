const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		admin: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
