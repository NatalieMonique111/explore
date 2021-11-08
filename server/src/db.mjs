import pgp from "pg-promise";

import { load_dotenv_if_exists } from "./utils.mjs";

load_dotenv_if_exists();

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES($<name>) RETURNING *", { name });

export const getRegion = (region) =>
  db.any("SELECT * FROM regions WHERE region = $<region>", { region });

export const getSites = (unique_number) =>
  db.any("SELECT * FROM sites WHERE unique_number = $<unique_number>", {
    unique_number,
  });

//create a new function that insert to a table, the new table will have one column of type XML
//insert each item on row array, insert is here (in the database) will receive long xml string then insert it in new table .xml column, then use value.

// will end up with table with data from xml! then query as usual...postgres query xml.

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
