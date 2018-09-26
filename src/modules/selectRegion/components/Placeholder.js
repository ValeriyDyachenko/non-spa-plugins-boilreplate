import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = (props) => {
  const {selectedTown, defaultCity} = props;

  const toggleVisible = () => {
    props.showList
      ? props.viewOff()
      : props.viewOn();
  };

  return (
    <div
      className="pick-your-town"
      onClick={toggleVisible}
    >
      {selectedTown || `${defaultCity}?`}
    </div>
  );
};

export default Placeholder;

Placeholder.propTypes = {
  selectedTown: PropTypes.string,
  defaultCity: PropTypes.string.isRequired,
  viewOff: PropTypes.func.isRequired,
  viewOn: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
};
