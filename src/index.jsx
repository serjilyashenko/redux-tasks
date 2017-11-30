import React from 'react';
import { render } from 'react-dom';
import RootContainer from 'containers/RootContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

render(
  <div>
    <RootContainer />
  </div>,
  document.getElementById('root'),
);
