import "./load-enviroment";

import app from "./app";

const port = process.env.PORT ?? 9000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🐇💨 Server listening on port ${port}`);
});
