import { CreateNote } from "../application/create-note";
import { NotesCompiler } from "../application/notes-compiler";
import { CreateController } from "./http/createController";
import { NotesController } from "./http/notesControllers";
import { JsonRepository } from "./notes-repository/simple-json-repository";

const jsonRepo = new JsonRepository();

const notefinder = new NotesCompiler(jsonRepo);
const notesController = new NotesController(notefinder);

const noteCreator = new CreateNote(jsonRepo);
const createController = new CreateController(noteCreator);

export { createController, notesController };
