import { Request, Response } from "express";

import { DeleteNote } from "../../application/delete-note";
import { NoteNotFound } from "../../application/note-not-found";

export class DeleteController {
  constructor(private readonly erase: DeleteNote) {}

  async run(req: Request, res: Response): Promise<Response | undefined> {
    try {
      const { id } = req.params;

      const note = await this.erase.delete(Number(id));

      res.status(200).json({ "Object deleted": note });
    } catch (err) {
      if (err instanceof NoteNotFound) {
        return res.status(404).send();
      }
      res.status(500).send();
    }
  }
}
