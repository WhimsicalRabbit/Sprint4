import { Note } from "../domain/note";
import { NotesRepository } from "../domain/notes-repository";

export class CreateNote {
  constructor(private readonly notesRepository: NotesRepository) {}

  async create(note: Note): Promise<Note> {
    const createdNote = await this.notesRepository.createNote(note);

    return createdNote;
  }
}
