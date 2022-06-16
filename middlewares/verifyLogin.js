const { default: axios } = require("axios");
const config = require("../config")[process.env.NODE_ENV || "development"];

const log = config.log();
const verifyLogin = async (req, res, next) => {
	log.debug("Verifying login");
	try {
		if (!req.headers["access_token"]) {
			throw { status: 400, message: "Access token not found" };
		}

		axios
			.get("http://localhost:3000/find/student-portal-authentication-service/1")
			.then((response) => response.data.url)
			.then(async (url) => {
				log.debug(`Recieved url ${url}`);
				const response = await axios.get(
					`${url}/verifyLogin/${req.headers["access_token"]}`
				);
				log.debug(response.data);
				if (response.data.success) {
					req.headers.user_id = response.data.result.id;

					next();
				}
			});
	} catch (err) {
		log.error(err.message);
		res
			.status(err.status || 500)
			.json({ success: false, message: err.message || "Something went wrong" });
	}
};

module.exports = verifyLogin;
