import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NoteRepository } from '../../domain/repositories/NoteRepository';
import { GetNoteByIdUseCase } from '../../domain/usecases/GetNoteByIdUseCase';

const noteRepository = new NoteRepository();
const getNoteByIdUseCase = new GetNoteByIdUseCase(noteRepository);

export const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = () => {
      const foundNote = getNoteByIdUseCase.execute(id);
      setNote(foundNote);
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return (
      <div className="container">
        <h2>Note not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="note-detail">
        <h2 className="mb-3">{note.title}</h2>
        <small className="text-light mb-3 d-block">
          {new Date(note.createdAt).toLocaleDateString()}
        </small>
        <p className="mb-4">{note.body}</p>
      </div>
    </div>
  );
};
