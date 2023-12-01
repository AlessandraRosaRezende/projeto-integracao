const jwt = require("jsonwebtoken");

const config = {
	algorithm: "HS256",
	expiresIn: "10d",
};

const createToken = (payload) =>
	jwt.sign(payload, process.env.JWT_SECRET, config);

const verifyToken = (token) => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET, config);
	} catch (e) {
		return { message: "Expired or invalid token" };
	}
};

module.exports = {
	createToken,
	verifyToken,
};
