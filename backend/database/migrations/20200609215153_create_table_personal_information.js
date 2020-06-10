
exports.up = function(knex) {
	return knex.schema.createTable('personal_information', table => {
		table.integer('parent_user_id').primary().references('user_id')
			.inTable('users')
		table.string('full_name', 40).notNull()
		table.integer('age', 40).notNull()
		table.string('city', 40).notNull()
		table.string('state', 40).notNull()
		table.string('college').notNull()
		table.string('campus').notNull()
		table.string('course', 40).notNull()
	});
},
exports.down = function(knex) {
    return knex.schema.dropTable('personal_information')
}
