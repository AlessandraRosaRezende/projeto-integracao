const options = {
	username: process.env.DB_USER || "root",
	password: process.env.DB_PASS || "123456",
	database: process.env.MYSQL_DB_NAME || "users-db",
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT || 3306,
	dialect: "mysql",
	dialectOptions: {
		timezone: "Z",
	},
	logging: false,
};

module.exports = options;
