export class NoteNotFound extends Error {
  constructor() {
    super(`This Note does not exists`);
  }
}
