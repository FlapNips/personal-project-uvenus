exports.up = function(knex) {
  return knex.schema.createTable('categories', table => {
	table.increments('category_id').primary()
	table.string('category_name', 50).notNull()
	table.string('category_parent')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories')
};
