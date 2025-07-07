import { getInitialData } from '../../data/source/NoteSource.js';
import {
  addNote,
  archiveNote,
  deleteNote,
  fetchArchivedCollection,
  fetchById,
  fetchCollection,
  unarchiveNote
} from '../../data/note/infrastructure/NoteRemoteService.js';

export class NoteRepository {
  constructor () {
    this.notes = getInitialData();
  }

  async addNote (title, body, token) {
    const response = await addNote({
        title,
        body,
      },
      token);

    if (response.error) {
      throw new Error(response.error);
    }

    return await response.data;
  }

  async deleteNote (id, token) {
    const response = await deleteNote(id, token);

    if (response.error) {
      throw new Error(response.error);
    }

    return null;
  }

  async archiveNote (id, token) {
    const response = await archiveNote(id, token);

    if (response.error) {
      throw new Error(response.error);
    }

    return true;
  }

  async unarchiveNote (id, token) {
    const response = await unarchiveNote(id, token);

    if (response.error) {
      throw new Error(response.error);
    }

    return true;
  }

  async getNotes (token) {
    const response = await fetchCollection(token);

    if (response.error) {
      throw new Error(response.error);
    }

    const data = await response.data;

    this.notes = data.map(({ id, title, body, createdAt }) => ({ id, title, body, createdAt }));

    return this.notes
      .sort((a, b) => {
        const dateDiff = new Date(b.createdAt) - new Date(a.createdAt);
        return dateDiff !== 0 ? dateDiff : a.title.localeCompare(b.title);
      });
  }

  async getArchivedNotes (token) {
    const response = await fetchArchivedCollection(token);

    if (response.error) {
      throw new Error(response.error);
    }

    const data = await response.data;

    this.notes = data.map(({ id, title, body, createdAt }) => ({ id, title, body, createdAt }));

    return this.notes
      .sort((a, b) => {
        const dateDiff = new Date(b.createdAt) - new Date(a.createdAt);
        return dateDiff !== 0 ? dateDiff : a.title.localeCompare(b.title);
      });
  }

  async searchNotes (query, token) {
    await this.getNotes(token);
    return this.notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  }

  async searchArchivedNotes (query, token) {
    await this.getArchivedNotes(token);
    return this.notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  }

  async getNoteById (id, token) {
    const note = await fetchById(id, token);

    if (note.error) {
      throw new Error(note.error);
    }

    console.log(note);

    return await note.data;
  }
}
