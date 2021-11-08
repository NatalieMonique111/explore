import express from "express";

import * as db from "./db.mjs";

const regionRouter = express.Router();

regionRouter.get("/:region", async (request, response) => {
  const region = await db.getRegion(request.params.region);
  response.json(region);
});

export default regionRouter;
