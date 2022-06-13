// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
let Pool;

// const pool = new Pool({
//     database: 'react_gallery', // database name (this will change)
//     host: 'localhost', // where to find the database
//     port: 5432,        // port for finding the database
//     max: 10,           // max number of connections for the pool
//     idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
// });

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        //Heroku fails without this
        ssl: { rejectUnauthorized: false }
    })
}
else {
    pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react_gallery'
    })
}

module.exports = pool;