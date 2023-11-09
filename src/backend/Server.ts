import "./load-enviroment";

import express from "express";

import { notesRouter } from "../notes/infrastructrure/http/notesRouters";
import { authentication } from "./middlewares/auth-middleware";
import { noCacheMiddleware } from "./middlewares/no-cache-middleware";

const app = express();
const port = process.env.PORT ?? 8080;

app.use(express.json());
app.use(noCacheMiddleware);
app.use(authentication);

app.use("/notes", notesRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🐇💨 Server listening on port ${port}`);
});
