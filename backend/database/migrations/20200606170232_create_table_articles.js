exports.up = function(knex) {
  return knex.schema.createTable('articles', table => {
    table.increments('article_id').primary()
    table.string('article_name', 50).notNull()
    table.string('article_img', 1000)
    table.string('article_description', 1000).notNull()
    table.binary('article_content').notNull()
    table.integer('article_category_parent').references('category_id')
            .inTable('categories').notNull()
    table.string('article_created_in').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles')
};
