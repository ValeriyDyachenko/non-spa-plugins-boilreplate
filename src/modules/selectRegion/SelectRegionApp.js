import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import SelectRegionContainer from './containers/SelectRegionContainer';
import configureStore from '../../redux/configureStore';
import './SelectRegionApp.css';

const store = configureStore();

class SelectRegionApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="pompa-region-select-container">
          <SelectRegionContainer
            url={this.props.url}
            defaultCity={this.props.defaultCity}
          />
        </div>
      </Provider>
    );
  }
}

export default hot(module)(SelectRegionApp);

SelectRegionApp.propTypes = {
  url: PropTypes.string.isRequired,
  defaultCity: PropTypes.string.isRequired,
};
