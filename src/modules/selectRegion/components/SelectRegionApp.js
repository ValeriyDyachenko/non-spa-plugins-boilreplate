import React from 'react';
import PropTypes from 'prop-types';
import ListContainer from '../containers/ListContainer';
import ConfirmContainer from '../containers/ConfirmContainer';
import PlaceholderContainer from '../containers/PlaceholderContainer';

class SelectRegionApp extends React.Component {
  componentDidMount() {
    const {
      setDefaultCity, setApiUrl, defaultCity, url,
    } = this.props;
    setDefaultCity(defaultCity);
    setApiUrl(url);
  }

  render() {
    const {
      userConfirmStatus,
      showList,
    } = this.props;

    return (
      <div className="pompa-region-select">
        <PlaceholderContainer />
        {
          showList
                    && typeof userConfirmStatus === 'undefined'
                    && <ConfirmContainer />
        }
        {
          showList
                    && typeof userConfirmStatus !== 'undefined'
                    && <ListContainer />
        }
      </div>
    );
  }
}

export default SelectRegionApp;

SelectRegionApp.propTypes = {
  userConfirmStatus: PropTypes.any,
  showList: PropTypes.bool.isRequired,
  defaultCity: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  setDefaultCity: PropTypes.func.isRequired,
  setApiUrl: PropTypes.func.isRequired,
};
