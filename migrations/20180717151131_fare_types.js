exports.up = function (knex, Promise) {
    return knex.schema.createTable('fare_types', function (table) {
        table.increments();
        table.string('rate');
        table.string('discount');
        table.string('phone');
        table.string('email')
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('customers');
};
