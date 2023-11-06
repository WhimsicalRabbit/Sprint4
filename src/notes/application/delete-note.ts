import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";

export class DeleteNote {
  constructor(private readonly notesRepo: NotesRepository) {}

  async delete(id: number): Promise<Note> {
    const task = await this.notesRepo.deleteNote(id);

    return task;
  }
}
