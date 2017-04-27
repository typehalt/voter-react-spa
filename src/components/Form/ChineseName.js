import React from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ChineseName = () => (
  <div>
    <Grid fluid style={{paddingLeft: "inherit"}}>
      <Row>
        <Col xs={12} sm={6}>
          <TextField
              hintText="王一心"
              floatingLabelText="中文姓名"
              floatingLabelFixed={true}
            />
          <br />
          <TextField
              hintText="3769 0001 1800"
              floatingLabelText="中文電碼"
              floatingLabelFixed={true}
              style={{fontFamily: "monospaced"}}
            />
        </Col>
        <Col xs={12} sm={6}>
          <img
            src={require('./assets/id-zh.png')}
            style={{maxWidth: "100%"}}
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default ChineseName;
