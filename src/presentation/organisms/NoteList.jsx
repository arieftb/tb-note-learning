import { NoteCard } from '../molecules/NoteCard';
import PropTypes from 'prop-types';

export const NoteList = ({ notes, onDelete, onToggleArchive, emptyMessage = 'Tidak ada catatan' }) => {
  if (notes.length === 0) {
    return <p className="empty-message">{emptyMessage}</p>;
  }

  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onToggleArchive={onToggleArchive}
        />
      ))}
    </>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleArchive: PropTypes.func.isRequired,
  emptyMessage: PropTypes.string
};
