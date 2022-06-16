const jwt = require("jsonwebtoken");
const Class = require("../models/Class");

const joinClass = async (req, res) => {
	try {
		const { id } = jwt.verify(req.params.token, process.env.SECRET_KEY);

		if (!id) {
			throw { status: 404, message: "Invalid token" };
		}

		const existingClass = Class.findByIdAndUpdate(id, {
			members: { ...members, members: req.headers.user_id },
		});

		res.status(200).json({ success: true, result: existingClass });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = joinClass;
