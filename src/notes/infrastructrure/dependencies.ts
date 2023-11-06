import { CreateNote } from "../application/create-note";
import { DeleteNote } from "../application/delete-note";
import { NotesCompiler } from "../application/notes-compiler";
import { CreateController } from "./http/createController";
import { DeleteController } from "./http/deleteController";
import { NotesController } from "./http/notesControllers";
import { JsonRepository } from "./notes-repository/simple-json-repository";

const jsonRepo = new JsonRepository();

const notefinder = new NotesCompiler(jsonRepo);
const notesController = new NotesController(notefinder);

const noteCreator = new CreateNote(jsonRepo);
const createController = new CreateController(noteCreator);

const noteEraser = new DeleteNote(jsonRepo);
const deleteController = new DeleteController(noteEraser);

export { createController, deleteController, notesController };
