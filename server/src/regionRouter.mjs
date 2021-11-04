import express from "express";

import * as db from "./db.mjs";

const regionRouter = express.Router();

regionRouter.get("/", async (request, response) => {
  const regions = await db.getRegions();
  response.json(regions);
});
