exports.up = function (knex, Promise) {
    // BookingId,CustomerId,RoomNo,CheckInDate,CheckOutData
    return knex.schema.createTable('reservations', function (table) {
        table.increments();
        table.string('customer_id');
        table.integer('room_no');
        table.date('check_in_date');
        table.date('check_out_date')
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('reservations');
};
