import { Button } from '../atoms/Button';
import PropTypes from 'prop-types';

export const NoteCard = ({ note, onDelete, onToggleArchive }) => {
  return (
    <div className="note-card slide-in">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <div className="note-card-footer">
        <small className="text-light">
          {new Date(note.createdAt).toLocaleDateString()}
        </small>
        <div className="note-card-actions">
          <Button
            onClick={() => onToggleArchive(note.id)}
          >
            {note.archived ? 'Aktifkan' : 'Arsipkan'}
          </Button>
          <Button
            onClick={() => onDelete(note.id)}
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleArchive: PropTypes.func.isRequired
};
