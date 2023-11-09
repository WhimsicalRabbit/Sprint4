import express from "express";

import { notesRouter } from "../notes/infrastructrure/http/notesRouters";
import { authentication } from "./middlewares/auth-middleware";
import { noCacheMiddleware } from "./middlewares/no-cache-middleware";

const app = express();

app.use(express.json());
app.use(noCacheMiddleware);
app.use(authentication);

app.use("/notes", notesRouter);

export default app;
