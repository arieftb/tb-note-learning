import { Input } from '../atoms/Input';
import PropTypes from 'prop-types';
import { useTranslation } from '../../context/useTranslation';

export const NoteSearch = ({ value, onChange }) => {
  const { translate } = useTranslation();
  return (
    <div className="note-search">
      <Input
        value={value}
        onChange={(value) => onChange(value)}
        placeholder={translate('searchNotesByTitle')}
        className="w-100"
      />
    </div>
  );
};

NoteSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
