import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";
import { EmptyNotes } from "./empty-notes";

export class NotesCompiler {
  constructor(private readonly notesRepository: NotesRepository) {}

  async run(): Promise<Note[]> {
    const notes = await this.notesRepository.getNotes();

    if (notes.length === 0) {
      throw new EmptyNotes();
    }

    return notes;
  }
}
