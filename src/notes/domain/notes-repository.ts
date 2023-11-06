import { Note } from "./note";

export interface NotesRepository {
  getNotes(): Promise<Note[]>;
  createNote(note: Note): Promise<Note>;
}
