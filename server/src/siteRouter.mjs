import express from "express";

import * as db from "./db.mjs";

const siteRouter = express.Router();

siteRouter.get("/:site", async (request, response) => {
  const sites = await db.getSites(request.params.site);
  response.json(sites);
});

export default siteRouter;
