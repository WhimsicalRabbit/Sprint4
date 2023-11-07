import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";
import { NoteNotFound } from "./note-not-found";

export class DeleteNote {
  constructor(private readonly notesRepo: NotesRepository) {}

  async delete(id: number): Promise<Note | null> {
    const note = await this.notesRepo.deleteNote(id);

    if (!note) {
      throw new NoteNotFound();
    }

    return note;
  }
}
