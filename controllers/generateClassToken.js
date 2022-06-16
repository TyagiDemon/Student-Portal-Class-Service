const jwt = require("jsonwebtoken");
const Class = require("../models/Class");
const log = require("../config")[process.env.NODE_ENV || "development"].log();
const generateClassToken = async (req, res) => {
	try {
		const existingClass = await Class.findById(req.params.class_id);

		if (!existingClass) {
			throw { status: 404, message: "Class not found" };
		}
		log.debug(`Class admin id is ${existingClass.admin}`);
		log.debug(`Your id is ${req.headers.user_id}`);
		if (existingClass.admin != req.headers.user_id) {
			throw { status: 400, message: "Only class admin can generate token" };
		}

		const token = jwt.sign({ id: existingClass._id }, process.env.SECRET_KEY);

		existingClass.token = token;

		await existingClass.save();

		res.status(200).json({ success: true, result: token });
	} catch (err) {
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = generateClassToken;
