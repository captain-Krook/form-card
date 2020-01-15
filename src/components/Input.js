import React from "react";
import { Inputs } from "./Input.styled";

export const Input = ({ value, onChange, type, pattern }) => {
  return (
    <Inputs type={type} value={value} onChange={onChange} pattern={pattern} />
  );
};
