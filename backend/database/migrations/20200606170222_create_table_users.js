exports.up = async function(knex) {
	return knex.schema.createTable('users', table => {
		table.increments('user_id').primary()
		table.string('username', 25).notNull().unique()
		table.string('email', 40).notNull().unique()
		table.string('password', 150).notNull()
		table.integer('points').notNull().defaultTo(0)
		table.integer('rank').defaultTo(1).references('rank_id')
			.inTable('ranks').notNull()
		table.boolean('admin').notNull().defaultTo(false)
		table.string('created_in').notNull()
		table.string('last_update')
		table.boolean('deleted').defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
