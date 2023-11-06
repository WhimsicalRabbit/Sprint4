import { Note } from "../../domain/note";
import { NotesRepository } from "../../domain/notes-repository";
import notesCollection from "./notes-collection.json";

export class JsonRepository implements NotesRepository {
  // eslint-disable-next-line @typescript-eslint/require-await
  async getNotes(): Promise<Note[]> {
    const notes = notesCollection;

    return notes;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async createNote(note: Note): Promise<Note> {
    const createdNote = new Note(
      notesCollection.length + 1,
      note.body,
      note.completed
    );

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    notesCollection.push(createdNote);

    return createdNote;
  }
}
