const db = require("../database/models");
const { createToken } = require("../utils/jwt");

const authenticateUser = async (email, password) => {
	const user = await db.User.findOne({ where: { email, password } });
  if (!user) return null;
  const token = createToken({ email, userId: user.id, role: user.role });
  return { token };
};

module.exports = {
  authenticateUser,
};