import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {grey400} from 'material-ui/styles/colors';

const Gender = () => (
  <div>
    <p style={{color: grey400}}>請選擇身份證上所寫的性別</p>
    <RadioButtonGroup name="gender" style={{paddingTop: 10}}>
      <RadioButton
        value="male"
        label="男"
      />
      <RadioButton
        value="female"
        label="女"
      />
    </RadioButtonGroup>
  </div>
);

export default Gender;
