
exports.up = function(knex) {
	return knex.schema.createTable('personal_information', table => {
		table.increments('id').primary()
		table.string('full_name', 40).notNull()
		table.string('state', 40).notNull()
		table.string('city', 40).notNull()
		table.string('status', 40).notNull()
		table.integer('age', 40).notNull()
		table.integer('schooling', 50).notNull()
		table.integer('college').notNull()
		table.integer('courser', 40).notNull()
		table.integer('rank').defaultTo(1).references('rank_id')
			.inTable('ranks').notNull()
		table.boolean('admin').notNull().defaultTo(false)
		table.string('created_in').notNull()
		table.string('last_update')
		table.boolean('deleted').defaultTo(false)
},
exports.down = function(knex) {
    return knex.schema.dropTable('personal_information')
};
