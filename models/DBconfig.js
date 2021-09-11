const { Pool, Client } = require('pg')
exports.pool = new Pool({
  user: 'parvatalaprasanth',
  host: 'localhost',
  database: 'postgres',
  password: '9490503775',
  port: 5432,
})

exports.client = new Client({
  user: 'parvatalaprasanth',
  host: 'localhost',
  database: 'postgres',
  password: '9490503775',
  port: 5432,
})