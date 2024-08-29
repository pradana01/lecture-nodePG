const pg = require('pg')
const { Pool } = pg
 
const pool = new Pool({
  user: 'postgres',
  password: '12345',
  host: 'localhost',
  port: 5432,
  database: 'tokopet',
  idleTimeoutMillis: 100
});
 
// async function connect() {
//     try {
//         let {rows} = await pool.query('SELECT NOW()')
//         console.log(rows);
//     } catch (error) {
//         console.log(error.message)
//     };
// };

// connect();

module.exports = pool;