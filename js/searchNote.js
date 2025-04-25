export function searchNotes (searchInput, notesContainer) {
    const searchText = searchInput.value.toLowerCase();
    const notes = notesContainer.querySelectorAll(".note");
  
    notes.forEach(note => {
      const text = note.textContent.toLowerCase();
      note.style.display = text.includes(searchText) ? "block" : "none";
    });
  }
  