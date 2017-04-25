import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './Form/MyAwesomeReactComponent';
import { Link } from 'react-router';
import s from '../styles/landing.style';

function Landing() {
  const repoReadmeLink = text => (""
  );

  return (
    <div>
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    </div>
  );
}

export default Landing;
