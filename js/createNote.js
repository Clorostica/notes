export function crearNota(texto) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  // Asignar un color predefinido a la nota
  noteDiv.style.backgroundColor = obtenerColorPredefinido();

  const noteContent = document.createElement("p");
  noteContent.textContent = texto;
  noteDiv.appendChild(noteContent);

  // Botón editar
  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = "✏️";

  editButton.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.value = noteContent.textContent;
    textarea.classList.add("edit-textarea");

    textarea.addEventListener("blur", () => {
      noteContent.textContent = textarea.value;
      noteDiv.replaceChild(noteContent, textarea);
      guardarNotas(); // Guardar después de editar
    });

    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        textarea.blur();
      }
    });

    noteDiv.replaceChild(textarea, noteContent);
    textarea.focus();
  });

  noteDiv.appendChild(editButton);

  // Botón eliminar
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    noteDiv.remove();
    guardarNotas(); // Guardar después de eliminar
  });

  noteDiv.appendChild(deleteButton);
  notesContainer.appendChild(noteDiv);

  // Guardar la nueva nota en localStorage
  guardarNotas();
}
