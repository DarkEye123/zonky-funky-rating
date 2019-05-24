import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ selector, children }) => {
  const element = document.getElementById(selector);
  return ReactDOM.createPortal(children, element);
};

Portal.propTypes = {
  selector: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Portal;
