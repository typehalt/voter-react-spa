import React from 'react';
import TextField from 'material-ui/TextField';

const EnglishName = () => (
  <div>
    <TextField
        hintText="Wong"
        floatingLabelText="英文姓氏"
        floatingLabelFixed={true}
      />
    <TextField
        hintText="Yat Sum"
        floatingLabelText="英文名字"
        floatingLabelFixed={true}
      />
  </div>
);

export default EnglishName;
