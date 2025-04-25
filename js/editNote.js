export function editNote(noteDiv, noteContent) {
    const textarea = document.createElement("textarea");
    textarea.value = noteContent.textContent;
    textarea.classList.add("edit-textarea");
  
    // Guardar al perder foco
    textarea.addEventListener("blur", () => {
      noteContent.textContent = textarea.value;
      noteDiv.replaceChild(noteContent, textarea);
    });
  
    // Guardar al presionar Enter
    textarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        textarea.blur();
      }
    });
  
    noteDiv.replaceChild(textarea, noteContent);
    textarea.focus();
  }
  