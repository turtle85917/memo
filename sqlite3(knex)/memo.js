const knex = require("knex"),
  db = knex({client: "sqlite3", connection: { filename: process.env.FILE }});

