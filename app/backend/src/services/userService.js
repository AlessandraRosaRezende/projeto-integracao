const db = require("../database/models");

const noPassword = { attributes: { exclude: ["password", "role"] } };

const fetchUsersFromDatabase = async () => {
	return db.User.findAll(noPassword);
};

const fetchUserById = async (id) => {
	return db.User.findByPk(id, noPassword);
};

const savePhotoUrlInDatabase = async (userId, photo) => {
	return db.User.update({ photo }, { where: { id: userId } });
};

module.exports = {
	fetchUsersFromDatabase,
	savePhotoUrlInDatabase,
	fetchUserById,
};
