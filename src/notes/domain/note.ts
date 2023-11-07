export class Note {
  constructor(
    public readonly id: number,
    public readonly body: string,
    public completed: boolean
  ) {}
}
