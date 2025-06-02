import { Input } from '../atoms/Input';
import PropTypes from 'prop-types';

export const NoteSearch = ({ value, onChange }) => {
  return (
    <div className="note-search">
      <Input
        value={value}
        onChange={(value) => onChange(value)}
        placeholder="Cari catatan berdasarkan judul..."
        className="w-100"
      />
    </div>
  );
};

NoteSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
