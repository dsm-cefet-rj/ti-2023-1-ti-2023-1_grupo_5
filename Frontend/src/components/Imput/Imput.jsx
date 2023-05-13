import React from 'react'
import * as C from "./imput.module"

const Imput = ({ type, placeholder, value, onChange }) => {
  return (
  <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
  />

  );
};

export default Imput