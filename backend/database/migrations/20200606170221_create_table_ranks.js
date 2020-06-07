exports.up = function(knex) {
  return knex.schema.createTable('ranks', table => {
	table.increments('rank_id').primary()
	table.string('rank_name', 20).notNull().unique()
	table.integer('rank_points').notNull()
  }).then( () => {
  	return knex('ranks').insert([
			{ rank_name: "rank 1", rank_points: 0 	},
			{ rank_name: "rank 2", rank_points: 1000 },
			{ rank_name: "rank 3", rank_points: 2500 },
		])
  })
  console.log('executou')
};

exports.down = function(knex) {
  return knex.schema.dropTable('ranks')
};
