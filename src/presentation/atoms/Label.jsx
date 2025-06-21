import PropTypes from 'prop-types';

export const Label = ({
  htmlFor,
  children,
  className = ''
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Label.defaultProps = {
  className: ''
};