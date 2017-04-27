import React from 'react';
import TextField from 'material-ui/TextField';

const IdNumber = () => (
  <div>
    <TextField
        hintText="K 123456"
        floatingLabelText="香港身分證號碼"
        floatingLabelFixed={true}
      />
  </div>
);

export default IdNumber;
