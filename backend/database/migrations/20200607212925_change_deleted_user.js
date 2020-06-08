
exports.up = function(knex) {
	return knex.raw('ALTER TABLE users RENAME COLUMN deleted_at TO deleted')
};

exports.down = function(knex) {
  return knex.raw('ALTER TABLE users RENAME COLUMN deleted TO deleted_at')
};
