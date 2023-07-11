import PropTypes from 'prop-types';
// import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
