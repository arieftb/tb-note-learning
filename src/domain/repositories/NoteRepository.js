import { getInitialData } from '../../data/source/NoteSource.js';

export class NoteRepository {
  constructor () {
    this.notes = getInitialData();
  }

  addNote (title, body) {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const date = new Date();
    const timeStamp = date.getTime();

    const newNote = {
      id: `${randomString}-${timeStamp}`,
      title: title,
      body: body,
      archived: false,
      createdAt: date.toISOString(),
    };
    this.notes.push(newNote);

    return newNote;
  }

  deleteNote (id) {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      return this.notes.splice(index, 1)[0];
    }
    return null;
  }

  archiveNote (id) {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      const [noteToArchive] = this.notes.splice(index, 1);
      noteToArchive.archived = true;
      this.notes.push(noteToArchive);
      return noteToArchive;
    }
    return null;
  }

  unarchiveNote (id) {
    const index = this.notes.findIndex(note => note.id === id);
    if (index !== -1) {
      const [noteToUnarchive] = this.notes.splice(index, 1);
      noteToUnarchive.archived = false;
      this.notes.push(noteToUnarchive);
      return noteToUnarchive;
    }

    return null;
  }

  getNotes () {
    return this.notes
      .filter(note => !note.archived)
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        if (dateA !== dateB) {
          return dateB - dateA;
        }

        return a.title.localeCompare(b.title);
      });
  }

  getArchivedNotes () {
    return this.notes.filter(note => note.archived).sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      if (dateA !== dateB) {
        return dateB - dateA;
      }

      return a.title.localeCompare(b.title);
    });
  }

  searchNotes (query) {
    return this.getNotes().filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  }

  searchArchivedNotes (query) {
    return this.getArchivedNotes().filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  }

  getNoteById (id) {
    return this.notes.find(note => {
      return note.id.toString() === id.toString();
    }) || null;
  }
}
