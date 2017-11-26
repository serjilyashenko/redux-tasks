import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import RootContainer from 'containers/RootContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

render(
  <div>
    <RootContainer />
    <App text="Hello" />
  </div>,
  document.getElementById('root'),
);
