import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EnglishName from './Form/EnglishName';
import { Link } from 'react-router';
import s from '../styles/landing.style';

function Reo1() {
  return (
    <div>
      <MuiThemeProvider>
        <EnglishName />
      </MuiThemeProvider>
    </div>
  );
}

export default Reo1;
