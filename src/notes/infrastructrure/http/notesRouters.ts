import express from "express";

import { createController, notesController } from "../dependencies";

const notesRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
notesRouter.get("/", notesController.run.bind(notesController));
// eslint-disable-next-line @typescript-eslint/no-misused-promises
notesRouter.post("/", createController.run.bind(createController));

export { notesRouter };
