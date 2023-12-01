const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ message: "Token not found" });
	}
	req.user = verifyToken(token.split(" ")[1]);
  if (req.user.message) {
    return res.status(401).json({ message: req.user.message });
  }
	next();
};

const validEmail = (req, res, next) => {
	const { email, password } = req.body;
	const regexEmail = /\S+@\S+\.\S+/;
	const regexPassword = /^.{6,}$/;
	if (!email || !password) {
		return res.status(400).json({ message: "All fields must be filled" });
	}
	if (
		String(password).length < 6 ||
		!regexEmail.test(email) ||
		!regexPassword.test(password)
	) {
		return res.status(401).json({ message: "Invalid email or password" });
	}
	next();
};

module.exports = {
	auth,
	validEmail,
};
