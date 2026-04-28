const { Pool } = require("pg");

const pool = new Pool({
  user: "dev",
  host: "127.0.0.1",
  database: "student_job_tracker",
  password: "1234",
  port: 5432,
});

module.exports = pool;