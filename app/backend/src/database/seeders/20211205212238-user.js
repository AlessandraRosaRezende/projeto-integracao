'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("users", [
			{
				username: "Admin",
				role: "admin",
				email: "admin@admin.com",
				password: "secret_admin",
				city: "Belo Horizonte",
				state: "MG",
				photo:
					"https://avatars.githubusercontent.com/u/78614350?s=400&u=e5c2bec61b69486566218d65e07e51920e64ccd8&v=4",
			},
			{
				username: "User",
				role: "user",
				email: "user@user.com",
				password: "secret_user",
				city: "São Paulo",
				state: "SP",
				photo:
					"https://cdn.pixabay.com/photo/2018/04/13/11/52/girl-3316342_1280.jpg",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("users", null, {});
	},
};
