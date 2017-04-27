import React from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';

const EnglishName = () => (
  <div>
    <Grid fluid style={{paddingLeft: "inherit"}}>
      <Row>
        <Col xs={12} sm={6}>
          <TextField
              hintText="Wong"
              floatingLabelText="英文姓氏"
              floatingLabelFixed={true}
            />
          <br />
          <TextField
              hintText="Yat Sum"
              floatingLabelText="英文名字"
              floatingLabelFixed={true}
            />
        </Col>
        <Col xs={12} sm={6}>
          <img
            src={require('./assets/id-en.png')}
            style={{maxWidth: "100%"}}
          />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default EnglishName;
