import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  font-size: 2rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  &.page {
    padding: 0.5rem 1rem;
    margin: 2rem 1rem 0;
  }
  &.add {
    padding: 0.5rem 2rem;
    font-size: 3rem;
    position: fixed;
    right: 5%;
    top: 85%;
  }
  &.on-modal {
    padding: 0.5rem 2rem;
    font-size: 3rem;
  }
  &.close-btn {
    position: absolute;
    top: -10%;
    right: -10%;
    letter-spacing: 1.2px;
    padding: 0.5rem 1rem;
  }
`;

const Button = props => {
  return (
    <Btn type={props.buttonType} onClick={props.action} className={props.class}>
      {props.buttonName}
    </Btn>
  );
};

export default Button;
