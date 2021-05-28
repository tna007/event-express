import { Pool, Client } from "pg";
import { config } from "dotenv";
import { App } from "shared-types";
config();
const connectionSettings = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: Number(process.env.CLOUD_PORT),
  host: process.env.CLOUD_HOST,
  database: process.env.DATABASE,
};
export function createPoolConnection() {
  const pool = new Pool(connectionSettings);
  return pool;
}

export async function createClienConnection() {
  const client = new Client(connectionSettings);
  await client.connect();
  return client;
}

const createTableEvents = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE IF NOT EXISTS events1 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type varchar(10) not null,
  date TIMESTAMP not null,
  address varchar(300) not null,
  photo bytea not null,
  description varchar(500)
);`;

const createTableLost = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE IF NOT EXISTS lost (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category varchar(10) not null,
  name varchar(100) not null,
  img bytea,
  location varchar not null,
  placeOrigin varchar,
  date TIMESTAMP not null,
  description varchar(500)
);`;

client.query(createTableEvents, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Table is successfully created");
  client.end();
});

client.query(createTableLost, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Table is successfully created");
  client.end();
});
