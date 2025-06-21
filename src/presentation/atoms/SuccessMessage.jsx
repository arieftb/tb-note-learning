import PropTypes from 'prop-types';

export const SuccessMessage = ({
  message,
  className = 'success-message'
}) => {
  if (!message) return null;

  return (
    <div className={className}>
      {message}
    </div>
  );
};

SuccessMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string
};

SuccessMessage.defaultProps = {
  message: '',
  className: 'success-message'
};