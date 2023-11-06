import { NotesCompiler } from "../application/notes-compiler";
import { NotesController } from "./http/notesControllers";
import { JsonRepository } from "./notes-repository/simple-json-repository";

const jsonRepo = new JsonRepository();
const notefinder = new NotesCompiler(jsonRepo);

export const notesController = new NotesController(notefinder);
