/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";

import {
  completeController,
  createController,
  deleteController,
  notesController,
} from "../dependencies";

const notesRouter = express.Router();

notesRouter.get("/", notesController.run.bind(notesController));

notesRouter.post("/", createController.run.bind(createController));

notesRouter.delete("/:id", deleteController.run.bind(deleteController));

notesRouter.put("/:id", completeController.run.bind(completeController));

export { notesRouter };
