// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite3'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            user: 'admin',
            password: 'password',
            database: 'serverlesschallenge',
            host: 'day-one-space-tours-hoteldbcluster-9nfqx5rpeqsk.cluster-czkkmvkxw6p9.us-east-1.rds.amazonaws.com'
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
