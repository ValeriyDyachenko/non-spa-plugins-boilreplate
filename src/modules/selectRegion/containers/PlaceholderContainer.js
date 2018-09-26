import {connect} from 'react-redux';
import {showList} from '../../../redux/modules/selectRegionApp';
import Placeholder from '../components/Placeholder';

function mapStateToProps(state) {
  return {
    selectedTown: state.selectRegionApp.selectedTown,
    showList: state.selectRegionApp.showList,
    defaultCity: state.selectRegionApp.suggestCity,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    viewOn: () => dispatch(showList(true)),
    viewOff: () => dispatch(showList(false)),
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Placeholder);
