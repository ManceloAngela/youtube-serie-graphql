exports.up = function (knex) {
	return knex.schema.createTable("comapany", (table) => {
		table.number("id").primary();
		table.string("login").notNull().unique();
		table.string("avatar_url").notNull();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("users");
};
