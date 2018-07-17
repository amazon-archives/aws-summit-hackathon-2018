exports.up = function (knex, Promise) {
    return knex.schema.createTable('customers', function (table) {
        table.increments();
        table.string('first_name');
        table.string('last_name');
        table.integer('zip');
        table.string('phone');
        table.string('email')
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('customers');
};
