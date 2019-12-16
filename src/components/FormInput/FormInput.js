import React from 'react';
import { FormGroup, FormText, Input, Label } from 'reactstrap';

const FormInput = ({
  input,
  label,
  type,
  inputPlaceHolder,
  meta: { error, touched }
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      {...input}
      type={type}
      placeholder={inputPlaceHolder}
    />
    {touched && <FormText className="help-block" style ={{color:"red"}}>{error}</FormText>}
  </FormGroup>
);

export default FormInput;
