const noteInput = document.getElementById("noteInput");
const addNoteButton = document.getElementById("add-note");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");

const colores = [
  '#FFB6C1', // Rosa
  '#D9FFB5', // Verde claro
  '#FFD700', // Amarillo
  '#ADD8E6', // Azul claro
  '#FF6347', // Rojo tomate
  '#98FB98', // Verde menta
  '#FFA07A', // Naranja claro
];
let colorIndex = 0; // Índice para llevar el control de los colores

function obtenerColorPredefinido() {
  const color = colores[colorIndex];
  colorIndex = (colorIndex + 1) % colores.length; // Aumentar el índice y volver a empezar al llegar al final
  return color;
}

function crearNota(texto) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  // Asignar un color aleatorio a la nota
  noteDiv.style.backgroundColor = obtenerColorPredefinido();

  const noteContent = document.createElement("p");
  noteContent.textContent = texto;
  noteDiv.appendChild(noteContent);

  agregarBotones(noteDiv, noteContent);

  notesContainer.appendChild(noteDiv);
}

function agregarBotones(noteDiv, noteContent) {
  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = "✏️";
  editButton.addEventListener("click", () => editarNota(noteDiv, noteContent));
  noteDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => eliminarNota(noteDiv));
  noteDiv.appendChild(deleteButton);
}

function editarNota(noteDiv, noteContent) {
  const textarea = document.createElement("textarea");
  textarea.value = noteContent.textContent;
  textarea.classList.add("edit-textarea");

  textarea.addEventListener("blur", () => {
    noteContent.textContent = textarea.value;
    noteDiv.replaceChild(noteContent, textarea);
  });

  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      textarea.blur();
    }
  });

  noteDiv.replaceChild(textarea, noteContent);
  textarea.focus();
}

function eliminarNota(noteDiv) {
  noteDiv.remove();
}

function buscarNotas() {
  const searchText = searchInput.value.toLowerCase();
  const notes = document.querySelectorAll(".note");

  notes.forEach((note) => {
    const text = note.textContent.toLowerCase();
    note.style.display = text.includes(searchText) ? "block" : "none";
  });
}

addNoteButton.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText) {
    crearNota(noteText);
    noteInput.value = "";
  }
});

searchInput.addEventListener("input", buscarNotas);
