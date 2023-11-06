import express from "express";

import { notesController } from "../dependencies";

const notesRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
notesRouter.get("/", notesController.run.bind(notesController));

export { notesRouter };
