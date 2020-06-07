exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
	table.increments('comment_id').primary()
    table.binary('comment_content').notNull()
    table.integer('comment_author').references('user_id')
            .inTable('users').notNull()
	table.integer('comment_like').notNull().defaultTo(0)
	table.integer('comment_deslike').notNull().defaultTo(0)
	table.integer('comment_relation').notNull().defaultTo(1)
	table.boolean('comment_banned').notNull().defaultTo(false)
	table.integer('article_parent').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
