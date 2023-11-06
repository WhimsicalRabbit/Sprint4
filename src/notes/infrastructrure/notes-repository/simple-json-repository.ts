import { Note } from "../../domain/note";
import { NotesRepository } from "../../domain/notes-repository";
import notesCollection from "./notes-collection.json";

export class JsonRepository implements NotesRepository {
  // eslint-disable-next-line @typescript-eslint/require-await
  async getNotes(): Promise<Note[]> {
    const notes = notesCollection;

    return notes;
  }
}
