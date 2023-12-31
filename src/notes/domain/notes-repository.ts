import { Note } from "./note";

export interface NotesRepository {
  getNotes(): Promise<Note[]>;
  createNote(note: Note): Promise<Note>;
  deleteNote(id: number): Promise<Note | null>;
  completeNote(id: number): Promise<Note | null>;
}
