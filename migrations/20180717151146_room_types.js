exports.up = function (knex, Promise) {
    return knex.schema.createTable('room_types', function (table) {
        table.increments();
        table.integer('num_of_beds');
        table.boolean('has_balcony');
        table.boolean('has_wifi')
        table.boolean('has_minibar')
        table.integer('fare_type_id')
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('room_types');
};
