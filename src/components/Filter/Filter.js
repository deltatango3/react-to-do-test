import React from "react";
import InputField from "../Input-Field/InputField";
import FilterDropDown from "../Filter-Drop-Down/FilterDropDown";
import styled from "styled-components";

const FilterContainer = styled.form`
  width: 80%;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & label {
    margin-right: 2rem;
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
  }
  & input {
    margin-right: 3rem;
  }
`;

const Filter = props => {
  return (
    <FilterContainer type="submit">
      {/* <h3>Filter By:</h3> */}
      <label htmlFor="userId">User ID</label>
      <InputField type={"text"} onChange={props.handleChange} name="userId" />
      <label htmlFor="status">Status</label>
      <FilterDropDown onChange={props.handleChange} />
    </FilterContainer>
  );
};

export default Filter;
