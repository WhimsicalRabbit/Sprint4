import { Request, Response } from "express";

import { CompleteNote } from "../../application/complete-note";
import { NoteNotFound } from "../../application/note-not-found";

export class CompleteController {
  constructor(private readonly complete: CompleteNote) {}

  async run(req: Request, res: Response): Promise<Response | undefined> {
    try {
      const { id } = req.params;

      const note = await this.complete.complete(Number(id));

      res.status(200).json({ "updated note": note });
    } catch (err) {
      if (err instanceof NoteNotFound) {
        res.status(404).send();
      }

      return res.status(500).send();
    }
  }
}
