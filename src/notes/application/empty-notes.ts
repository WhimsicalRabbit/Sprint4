export class EmptyNotes extends Error {
  constructor() {
    super(`No notes created yet`);
  }
}
