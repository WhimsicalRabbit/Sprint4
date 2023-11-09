import * as dotenv from "dotenv";
import { type NextFunction, type Request, type Response } from "express";
import supertest from "supertest";

import app from "../../../../src/backend/app";
import { authentication } from "../../../../src/backend/middlewares/auth-middleware";
import { noCacheMiddleware } from "../../../../src/backend/middlewares/no-cache-middleware";
import { Note } from "../../../../src/notes/domain/note";

dotenv.config();

const user = process.env.USER!;
const key = process.env.PASSWORD!;

describe("endpoints", () => {
  it("should recieve a json and a 200 status code", async () => {
    const response = await supertest(app).get("/notes").auth(user, key);

    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toHaveLength(4);
  });

  it("should recieve a 201 status code only when using a post request, also make sure that the note has been really added", async () => {
    const newNote = {
      id: 5,
      body: "Nothing else to give to the rabbit 🐇",
      completed: false,
    };

    const post = await supertest(app)
      .post("/notes")
      .auth(user, key)
      .send(newNote);

    expect(post.statusCode).toBe(201);

    const response = await supertest(app).get("/notes").auth(user, key);

    const contents = response.body.map((note: Note) => note.body);

    expect(contents).toContain(newNote.body);
  });

  it("should recieve a 200 status when passing a note id, also make sure that the note has been succesfully erased", async () => {
    const erase = await supertest(app).delete("/notes/2").auth(user, key);

    expect(erase.statusCode).toBe(200);

    const response = await supertest(app).get("/notes").auth(user, key);

    expect(response.body).toHaveLength(4);
  });

  it("should recieve a 200 status when passing a note id, also make sure that the specific note have been updated", async () => {
    const update = await supertest(app).put("/notes/1").auth(user, key);

    expect(update.statusCode).toBe(200);

    const response = await supertest(app).get("/notes").auth(user, key);

    const contents = response.body.map((note: Note) => note.completed);

    expect(contents).toContain(true);
  });
});

describe("middlewares", () => {
  const next = jest.fn();
  describe("Auth Middleware", () => {
    it("should call next when passing the correct user and key", () => {
      const res = {};
      const req = {
        headers: {
          authorization: `Basic ${Buffer.from(`${user}:${key}`).toString(
            "base64"
          )}`,
        },
      };

      authentication(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalled();
    });

    it('should return 401 when receiving an invalid username and call the send function with "Unathorized"', () => {
      const falseUser = "Boo-Boo";
      const falseKey = "Keys";
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const req = {
        headers: {
          authorization: `Basic ${Buffer.from(
            `${falseUser}:${falseKey}`
          ).toString("base64")}`,
        },
      };
      const expectedStatus = 401;
      const expectedMessage = "Unauthorized";

      authentication(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);

      expect(res.send).toHaveBeenCalledWith(expectedMessage);
    });
  });
  it("should given the no cache middleware", () => {
    const req = {};
    const res: Partial<Response> = {
      set: jest.fn(),
    };

    noCacheMiddleware(req as Request, res as Response, next as NextFunction);

    expect(res.set).toHaveBeenCalledWith("Cache-Control", "no-cache");
    expect(next).toHaveBeenCalled();
  });
});
