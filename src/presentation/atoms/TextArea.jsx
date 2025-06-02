import PropTypes from 'prop-types';

export const Textarea = ({ value, onChange, placeholder, className = '' }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="4"
      className={className}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
};

Textarea.defaultProps = {
  placeholder: '',
  className: ''
};
