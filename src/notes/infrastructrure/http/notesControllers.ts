/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

import { EmptyNotes } from "../../application/empty-notes";
import { NotesCompiler } from "../../application/notes-compiler";

export class NotesController {
  constructor(private readonly compiler: NotesCompiler) {}

  async run(_req: Request, res: Response) {
    try {
      const note = await this.compiler.run();
      res.status(200).send(note);
    } catch (err) {
      if (err instanceof EmptyNotes) {
        return res.status(404).send();
      }

      return res.status(500).send();
    }
  }
}
