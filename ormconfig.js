module.exports = {
    type: 'mariadb',

    url     : 'mariadb-typeorm',
    host    : 'mariadb-typeorm',
    port    : 3306,
    username: 'testuser',
    password: 'testpw',
    database: 'testdb',

    dropSchema   : false,
    synchronize  : true,
    migrationsRun: false,

    logging: 'error',
    logger : 'file',

    cli: {
        entitiesDir: 'src/entities',
    }
};