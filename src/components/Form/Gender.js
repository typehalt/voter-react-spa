import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {grey400} from 'material-ui/styles/colors';

const Gender = () => (
  <div>
    <p>
      <small style={{color: '#999'}}>請選擇身份證上所寫的性別</small>
    </p>
    <RadioButtonGroup name="gender" style={{paddingTop: 12, paddingBottom: 12}}>
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
