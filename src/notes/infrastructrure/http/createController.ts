import { Request, Response } from "express";

import { CreateNote } from "../../application/create-note";
import { Note } from "../../domain/note";

export class CreateController {
  constructor(private readonly create: CreateNote) {}

  async run(
    req: Request<Record<string, unknown>, Record<string, unknown>, Note>,
    res: Response
  ): Promise<void> {
    const note = await this.create.create(req.body);
    res.status(201).json({ note });
  }
}
