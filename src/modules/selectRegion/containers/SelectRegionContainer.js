import {connect} from 'react-redux';
import SelectRegionApp from '../components/SelectRegionApp.js';
import {
  setDefaultCity,
  setApiUrl,
} from '../../../redux/modules/selectRegionApp';

function mapStateToProps(state) {
  const {showList, userConfirmStatus} = state.selectRegionApp;
  return {
    showList,
    userConfirmStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDefaultCity: (city) => dispatch(setDefaultCity(city)),
    setApiUrl: (url) => dispatch(setApiUrl(url)),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectRegionApp);
