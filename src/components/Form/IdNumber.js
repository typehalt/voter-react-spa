import React from 'react';
import TextField from 'material-ui/TextField';

const IdNumber = () => (
  <div>
    <p>
      <small style={{color: '#999'}}>香港身分證號碼</small>
    </p>
    <TextField
      hintText="K"
      style={{maxWidth: "3em"}}
      inputStyle={{textAlign: "center", textTransform: "uppercase"}}
      hintStyle={{left: "1em"}}
      maxLength="2"
      errorText="格式錯誤"
    />
    <TextField
      hintText="123456"
      style={{maxWidth: "6em"}}
      inputStyle={{textAlign: "center"}}
      hintStyle={{left: "1.25em"}}
      maxLength="6"
      errorText="&nbsp;"
    />
    <TextField
      hintText="(&#8199;)"
      style={{maxWidth: "3em"}}
      inputStyle={{textAlign: "center"}}
      hintStyle={{left: "1em"}}
      disabled={true}
      underlineShow={false}
      errorText="&nbsp;"
    />
  </div>
);

export default IdNumber;
