import { crearNota } from "./createnote.js";

export function agregarNota(noteInput, notesContainer) {
  const noteText = noteInput.value.trim();
  if (noteText) {
    crearNota(noteText, notesContainer); // Crear la nota
    noteInput.value = ""; // Limpiar el input
  }
}
