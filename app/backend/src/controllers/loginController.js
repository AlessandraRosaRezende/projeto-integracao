const userService = require("../services/loginService");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
		const user = await userService.authenticateUser(email, password);
		if (user) {
	    return res.status(200).json({ token: user.token} );
		} else {
			return res.status(401).json({ error: "Credenciais inválidas" });
		}
	} catch (error) {
		console.error("Erro durante a autenticação:", error.message);
		return res.status(500).json({ error: "Erro interno do servidor" });
	}
};

const role = async (req, res) => {
	const role = req.user.role;
	const userId = req.user.userId;
	return res.status(200).json({ role, userId });
};

module.exports = {
	login,
	role,
};
