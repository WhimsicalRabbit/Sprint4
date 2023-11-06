import { writeFile } from "node:fs";

import { Note } from "../../domain/note";

export const savetoDataBase = (note: Note): void => {
  writeFile(
    "./notes/infrastructrure/notes-repository/notes-collection.json",
    JSON.stringify(note, null, 2),
    (err: Error | null) => {
      if (err) {
        throw err;
      }
    }
  );
};
