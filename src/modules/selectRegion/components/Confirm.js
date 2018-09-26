import React from 'react';
import PropTypes from 'prop-types';

const Confirm = (props) => {
  const {
    defaultCity,
    changeConfirmSuggest,
    handleSelectCity,
    hideList,
    apiUrl,
  } = props;

  const handleOk = () => {
    changeConfirmSuggest(true);
    handleSelectCity(apiUrl, defaultCity);
    hideList();
  };

  const handleNo = () => {
    changeConfirmSuggest(false);
  };

  return (
    <div className="confirmSection">
      <div
        className="confirmBtn confirmBtn--yes"
        onClick={handleOk}
      >
                Да
      </div>
      <div
        onClick={handleNo}
        className="confirmBtn confirmBtn--no"
      >
                Нет
      </div>
    </div>
  );
};

export default Confirm;

Confirm.propTypes = {
  defaultCity: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired,
  changeConfirmSuggest: PropTypes.func.isRequired,
  handleSelectCity: PropTypes.func.isRequired,
  hideList: PropTypes.func.isRequired,
};
