exports.up = function(knex) {
  return knex.schema.createTable('articles', table => {
	table.increments('article_id').primary()
	table.string('article_name', 50).notNull()
	table.string('article_img', 1000)
    table.string('description', 1000).notNull()
    table.binary('content').notNull()
    table.integer('category_parent').references('category_id')
            .inTable('categories').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles')
};
