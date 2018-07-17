exports.up = function (knex, Promise) {
    // RoomId,RoomNo,Floor,RoomTypeId
    return knex.schema.createTable('rooms', function (table) {
        table.increments();
        table.integer('room_no');
        table.integer('floor');
        table.integer('room_type_id')
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('rooms');
};
