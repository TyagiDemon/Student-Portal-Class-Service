const Class = require("../models/Class.js");

const createClass = async (req, res) => {
	try {
		const newClass = Class.create({
			name: req.body.name,
			admin: req.body.id,
		});

		await newClass.save();
		res.status(201).json({
			success: true,
			result: newClass,
		});
	} catch (err) {
		res.status(err.status || 500).json({
			success: false,
			message: err.message || "Something went wrong",
		});
	}
};

module.exports = createClass;
