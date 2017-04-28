import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {redA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import VoterSpaAppBar from './VoterSpaAppBar';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#c91f37",
  },
});

function App({ children, routes }) {
  return (
    <div>
      <MuiThemeProvider  muiTheme={muiTheme}>
        <VoterSpaAppBar />
      </MuiThemeProvider>
      <Grid fluid>
        <Row>
          <Col sm={12} mdOffset={1} md={10}  lgOffset={3} lg={8}>
            <MuiThemeProvider muiTheme={muiTheme}>
              {children}
            </MuiThemeProvider>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
