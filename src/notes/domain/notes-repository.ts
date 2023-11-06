import { Note } from "./note";

export interface NotesRepository {
  getNotes(): Promise<Note[]>;
}
