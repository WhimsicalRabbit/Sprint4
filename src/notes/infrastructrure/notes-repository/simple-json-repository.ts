/* eslint-disable @typescript-eslint/require-await */
import { Note } from "../../domain/note";
import { NotesRepository } from "../../domain/notes-repository";
import notesCollection from "./notes-collection.json";

export class JsonRepository implements NotesRepository {
  async getNotes(): Promise<Note[]> {
    const notes = notesCollection;

    return notes;
  }

  async createNote(note: Note): Promise<Note> {
    const createdNote = new Note(
      notesCollection.length + 1,
      note.body,
      note.completed
    );

    notesCollection.push(createdNote);

    return createdNote;
  }

  async deleteNote(id: number): Promise<Note | null> {
    const deletedNote = notesCollection.find((note) => note.id === id);

    notesCollection.splice(id - 1, 1);

    return deletedNote ? deletedNote : null;
  }

  async completeNote(id: number): Promise<Note | null> {
    const completedNote = notesCollection.find((note) => note.id === id);

    if (completedNote) {
      completedNote.completed = true;
    }

    return completedNote ? completedNote : null;
  }
}
