### API

`GET /reservations`: Lists all of the current users reservations.  Columns would
include: Hotel Name (link), Reservation date range.

**Returns**
```
{
  "data": [
    {
      "name": "Hotel A",
      "id": 1,
      "reservation": {
        "startDate": "2018-01-01",
        "endDate": "2018-01-07"
      }
    }
  ]
}
```

`GET /hotels`: Lists all of the hotels. Columns would include: Hotel
Name (link)

**Returns**
```
{
  "data": [
    {
      "name": "Hotel A",
      "id": 1
    },
    {
      "name": "Hotel B",
      "id": 2
    }
  ]
}
```

`GET /hotels/:hotelId`: Displays a hotel and a calender that blocks out
already reserved hotel rooms.  Selector that can choose a date range to
reserve a room.

**Returns**:
```
{
  "data": {
    "name": "Hotel A",
    "reservations": {
      "2018-01-01": { total: 9, used: 8, booked: true },
      "2018-01-02": { total: 9, used: 8, booked: true },
      "2018-01-03": { total: 4, used: 3, booked: false },
    }
  }
}
```

`POST /hotels/:hotelId?dateStart=01/05/2018&dateEnd=01/06/2018`

**Returns**
```
{
  "data": {
    "name": "Hotel A",
     "reservations": {
        "2018-01-01": 9,
        "2018-01-02": 3,
        "2018-01-03": 4
      }
  }
}
```


## Migrations

mysqlimport serverlesschallenge --ignore-lines=1 --fields-terminated-by=, -h day-one-space-tours-hoteldbcluster-9nfqx5rpeqsk.cluster-czkkmvkxw6p9.us-east-1.rds.amazonaws.com -u admin sample_dataset/customers.csv --local -p
mysqlimport serverlesschallenge --ignore-lines=1 --fields-terminated-by=, -h day-one-space-tours-hoteldbcluster-9nfqx5rpeqsk.cluster-czkkmvkxw6p9.us-east-1.rds.amazonaws.com -u admin sample_dataset/fare_types.csv --local -p
mysqlimport serverlesschallenge --ignore-lines=1 --fields-terminated-by=, -h day-one-space-tours-hoteldbcluster-9nfqx5rpeqsk.cluster-czkkmvkxw6p9.us-east-1.rds.amazonaws.com -u admin sample_dataset/reservations.csv --local -p
mysqlimport serverlesschallenge --ignore-lines=1 --fields-terminated-by=, -h day-one-space-tours-hoteldbcluster-9nfqx5rpeqsk.cluster-czkkmvkxw6p9.us-east-1.rds.amazonaws.com -u admin sample_dataset/room_types.csv --local -p
mysqlimport serverlesschallenge --ignore-lines=1 --fields-terminated-by=, -h day-one-space-tours-hoteldbcluster-9nfqx5rpeqsk.cluster-czkkmvkxw6p9.us-east-1.rds.amazonaws.com -u admin sample_dataset/rooms.csv --local -p
