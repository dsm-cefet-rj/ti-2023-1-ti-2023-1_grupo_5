import React from 'react'
import * as C from "./imput.module"

const Imput = ({ onBlur, id, type, placeholder, value, onChange }) => {
  return (
  <C.Input
        id = {id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
  />
  );
};

export default Imput