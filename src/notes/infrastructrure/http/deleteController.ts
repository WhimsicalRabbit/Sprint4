import { Request, Response } from "express";

import { DeleteNote } from "../../application/delete-note";

export class DeleteController {
  constructor(private readonly erase: DeleteNote) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async run(req: Request, res: Response) {
    const { id } = req.params;

    const note = await this.erase.delete(Number(id));

    res.status(204).json({ "Object deleted": note });
  }
}
