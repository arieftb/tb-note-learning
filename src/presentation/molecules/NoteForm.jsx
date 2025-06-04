import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';
import PropTypes from 'prop-types';

export const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  const remainingChars = 50 - title.length;
  const isCharLimitExceeded = remainingChars < 0;

  return (
    <form onSubmit={handleSubmit} className="note-form fade-in">
      <div className="note-form-group">
        <Input
          value={title}
          onChange={(value) => setTitle(value)}
          placeholder="Judul catatan"
          required
          className="w-100 mb-1"
        />
        <small className={`char-limit ${isCharLimitExceeded ? 'text-accent' : 'text-light'}`}>
          {remainingChars} karakter tersisa
        </small>
      </div>
      <div className="note-form-group">
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Isi catatan"
          required
          className="w-100"
        />
      </div>
      <Button
        type="submit"
        disabled={isCharLimitExceeded}
        className="w-100"
      >
        Tambah Catatan
      </Button>
    </form>
  );
};

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

// Additional PropType documentation for the onSubmit callback
// The onSubmit function will receive an object with the following shape:
// {
//   title: string,
//   body: string
// }
