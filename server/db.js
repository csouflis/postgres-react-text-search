const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kthl8822",
  port: 5432,
  host: "localhost",
  database: "partydb"
});

module.exports = pool;
