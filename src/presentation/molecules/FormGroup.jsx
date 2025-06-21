import PropTypes from 'prop-types';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';
import { ErrorMessage } from '../atoms/ErrorMessage';

export const FormGroup = ({
  id,
  label,
  value,
  onChange,
  type = 'text',
  error = '',
  required = false,
  className = 'form-group',
  children,
  ...otherProps
}) => {
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        {...otherProps}
      />
      <ErrorMessage message={error}/>
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

FormGroup.defaultProps = {
  type: 'text',
  error: '',
  required: false,
  className: 'form-group',
  children: null
};
