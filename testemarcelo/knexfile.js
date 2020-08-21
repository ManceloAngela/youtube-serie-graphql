// Update with your config settings.

module.exports = {
	client: "sqlite3",
	connection: {
		filename: "./xerpa.sqlite",
	},
	migrations: {
		tableName: "knex_migrations",
		directory: "./src/db/migrations",
	},
};
