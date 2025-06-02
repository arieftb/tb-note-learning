import PropTypes from 'prop-types';

export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  disabled: false,
  className: ''
};
