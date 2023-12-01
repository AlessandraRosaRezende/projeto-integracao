const userService = require("../services/userService");

const findAll = async (_req, res) => {
	try {
		const users = await userService.fetchUsersFromDatabase();
		return res.status(200).json(users);
	} catch (error) {
		console.error("Erro ao buscar usuários:", error.message);
		res.status(500).json({ error: "Erro interno do servidor" });
	}
};

const findById = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await userService.fetchUserById(Number(id));
		if (user) {
			return res.status(200).json(user);
		}
		return res.status(404).json({ error: "Usuário não encontrado" });
	} catch (error) {
		console.error("Erro ao buscar usuário:", error.message);
		res.status(500).json({ error: "Erro interno do servidor" });
	}
}

const updatePhoto = async (req, res) => {
	const { userId } = req.params;
	const { photo } = req.body;
	try {
		await userService.savePhotoUrlInDatabase(userId, photo);
		res.json({ message: "Foto salva com sucesso" });
	} catch (error) {
		console.error("Erro ao salvar a foto:", error.message);
		res.status(500).json({ error: "Erro interno do servidor" });
	}
}

module.exports = {
	findAll,
	findById,
	updatePhoto,
};
