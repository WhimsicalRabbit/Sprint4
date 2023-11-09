import { type NextFunction, type Request, type Response } from "express";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = process.env.USER!;
  const key = process.env.PASSWORD!;
  const auth = req.headers.authorization;

  if (auth) {
    const [type, credentials] = auth.split(" ");

    if (type === "Basic") {
      const [username, password] = Buffer.from(credentials, "base64")
        .toString("utf8")
        .split(":");

      if (username === user && password === key) {
        next();

        return;
      }
    }
  }

  res.status(401).send("Unauthorized");
};
