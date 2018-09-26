import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const {
    userInput,
    towns,
    changeValue,
    handleSelectCity,
    hideList,
    fetchSuggest,
    apiUrl,
  } = props;

  const handleChange = (val) => {
    changeValue(val),
    fetchSuggest(apiUrl, val);
  };

  const variants = towns.map(
      (town) => (
        <div
          key={town}
          onClick={(e) => changeValue(town)}
          className="suggestList__item"
        >
          {town}
        </div>
      ),
  );

  const isActive = towns.includes(userInput);
  const disabledBtn = isActive ? '' : 'confirmBtn--disabled ';

  return (
    <div className="suggestListWrapper">
      <div
        className="select-region-close"
        onClick={(e) => hideList()}
      >
                &times;
      </div>
      <input
        className="suggestListWrapper__town-input"
        type="text"
        placeholder="Город"
        value={userInput}
        onChange={(e) => handleChange(e.target.value)}
        autoFocus
      />
      <div
        className={`confirmBtn confirmBtn--yes confirmBtn--save ${disabledBtn}`}
        onClick={
          (e) => {
            // isActive && (selectTown(userInput), hideList())
            isActive && (handleSelectCity(apiUrl, userInput), hideList());
          }
        }
      >
        {isActive ? 'Сохранить' : 'Напечатайте название'}
      </div>
      {
        towns.length > 0
                && (
                  <div className="suggestList pompa-region-scroll">
                    {variants}
                  </div>
                )
      }
    </div>
  );
};

export default List;

List.propTypes = {
  userInput: PropTypes.string.isRequired,
  apiUrl: PropTypes.string.isRequired,
  towns: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  handleSelectCity: PropTypes.func.isRequired,
  hideList: PropTypes.func.isRequired,
  fetchSuggest: PropTypes.func.isRequired,
};
