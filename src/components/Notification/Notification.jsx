import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};
Notification.protoType = {
  message: PropTypes.string.isRequired,
};
export default Notification;
