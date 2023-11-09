import { type NextFunction, type Request, type Response } from "express";

export const noCacheMiddleware = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.set("Cache-Control", "no-cache");
  next();
};
