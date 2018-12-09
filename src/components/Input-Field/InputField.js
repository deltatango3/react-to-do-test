import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  font-size: 1.4rem;
  padding: 0.5rem;
`;

//Made this more reusable with the thought that I could create a checkbox for the completed filter. But I may go the select box route.
const InputField = props => {
  return (
    <Input
      type={props.type}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
    />
  );
};

export default InputField;
