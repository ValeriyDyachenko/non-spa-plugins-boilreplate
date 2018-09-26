import {connect} from 'react-redux';
import List from '../components/List';
import {
  showList,
  inputChanged,
  handleSelectCity,
  suggestFetchData,
} from '../../../redux/modules/selectRegionApp';

function mapStateToProps(state) {
  return {
    userInput: state.selectRegionApp.inputValue,
    towns: state.selectRegionApp.suggest,
    apiUrl: state.selectRegionApp.apiUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeValue: (val) => dispatch(inputChanged(val)),
    handleSelectCity: (url, name) => dispatch(handleSelectCity(url, name)),
    hideList: (isVisible) => dispatch(showList(isVisible)),
    fetchSuggest: (url, val) => dispatch(suggestFetchData(url, val)),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);
