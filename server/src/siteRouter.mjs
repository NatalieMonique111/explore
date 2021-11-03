import express from "express";

import * as db from "./db.mjs";

const siteRouter = express.Router();

siteRouter.get("/", async (request, response) => {
  const sites = await db.getSites();
  response.json(sites);
});
