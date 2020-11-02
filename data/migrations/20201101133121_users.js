
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('user', function(table) {
      table.increments('id');
      table.string('username').notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.integer('number_of_posts').notNullable();
      table.timestamps(true, true);      
    });    
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};

