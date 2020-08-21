exports.up = function (knex) {
	return knex.schema.createTable("company", (schema) => {
		schema.number("id").primary();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("company");
};
