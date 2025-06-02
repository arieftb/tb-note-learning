import PropTypes from 'prop-types';

export const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

// Create a prop types object without destructuring
const inputPropTypes = {
  /** The input value */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,

  /** Change handler function */
  onChange: PropTypes.func.isRequired,

  /** Placeholder text */
  placeholder: PropTypes.string,

  /** Input type attribute */
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'url',
    'search',
    'date',
    'time',
    'datetime-local'
  ])
};

// Assign prop types without the problematic destructuring
Input.propTypes = {
  ...inputPropTypes,
  // For any other standard HTML input props
  ...Object.fromEntries(
    Object.entries(PropTypes)
      .filter(([key]) => !['string', 'func', 'oneOf', 'oneOfType'].includes(key))
      .map(([key, val]) => [key, val])
  )
};

Input.defaultProps = {
  placeholder: '',
  type: 'text'
};
