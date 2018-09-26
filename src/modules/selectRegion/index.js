import React from 'react';
import ReactDOM from 'react-dom';
import SelectRegionApp from './SelectRegionApp';

function selectRegion(selector, props) {
  ReactDOM.render(
      <SelectRegionApp {...props} />,
      selector,
  );
}

window.selectRegion = selectRegion;
