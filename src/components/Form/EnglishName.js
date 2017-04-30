import React from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FormsyText } from 'formsy-material-ui/lib';

const EnglishName = () => (
  <div>
    <Grid fluid style={{paddingLeft: "inherit"}}>
      <Row>
        <Col xs={12} sm={6}>
          <FormsyText
              name="en-lastname"
              hintText="LAM"
              floatingLabelText="英文姓氏"
              floatingLabelFixed={true}
            />
          <br />
          <FormsyText
              name="en-firstname"
              hintText="Yau Ling"
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
