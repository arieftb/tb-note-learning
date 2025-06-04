import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetNoteByIdUseCase } from '../../domain/usecases/GetNoteByIdUseCase';
import { DeleteNoteUseCase } from '../../domain/usecases/DeleteNoteUseCase';
import noteRepository from '../../domain/repositories/NoteRepositoryInstance';
import { Button } from '../atoms/Button';

const getNoteByIdUseCase = new GetNoteByIdUseCase(noteRepository);
const deleteNoteUseCase = new DeleteNoteUseCase(noteRepository);

export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = () => {
      const foundNote = getNoteByIdUseCase.execute(id);
      setNote(foundNote);
    };

    fetchNote();
  }, [id]);

  const handleDeleteNote = () => {
    deleteNoteUseCase.execute(id);
    navigate('/');
  };

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
        <div className="note-detail-actions">
          <Button onClick={handleDeleteNote}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};
