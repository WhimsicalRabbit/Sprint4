import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";
import { NoteNotFound } from "./note-not-found";

export class CompleteNote {
  constructor(private readonly noteRepo: NotesRepository) {}

  async complete(id: number): Promise<Note | null> {
    const completedNote = await this.noteRepo.completeNote(id);

    if (!completedNote) {
      throw new NoteNotFound();
    }

    return completedNote;
  }
}
