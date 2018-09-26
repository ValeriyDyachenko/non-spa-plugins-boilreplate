import {connect} from 'react-redux';
import Confirm from '../components/Confirm';
import {
  changeConfirmSuggest,
  showList,
  handleSelectCity,
} from '../../../redux/modules/selectRegionApp';

function mapStateToProps(state) {
  return {
    defaultCity: state.selectRegionApp.suggestCity,
    apiUrl: state.selectRegionApp.apiUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeConfirmSuggest: (answer) => dispatch(changeConfirmSuggest(answer)),
    hideList: (isVisible) => dispatch(showList(isVisible)),
    handleSelectCity: (url, name) => dispatch(handleSelectCity(url, name)),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Confirm);
