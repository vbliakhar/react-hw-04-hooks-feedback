import './Section.scss';
import PropTypes from 'prop-types';
const Section = ({ title = { test }, children }) => {
  return (
    <div className="Section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
