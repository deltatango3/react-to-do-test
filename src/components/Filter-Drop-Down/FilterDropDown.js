import React from "react";
import styled from "styled-components";

const DropDown = styled.select`
  border: none;
  font-size: 1.4rem;
`;

const FilterDropDown = props => {
  return props.editMode ? (
    props.editableItem.completed ? (
      <DropDown name="status" id="status" onChange={props.onChange}>
        <option value="complete">Completed</option>
        <option value="incomplete">Incomplete</option>
      </DropDown>
    ) : (
      <DropDown name="status" id="status" onChange={props.onChange}>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </DropDown>
    )
  ) : (
    <DropDown name="status" id="status" onChange={props.onChange}>
      <option value="all">All</option>
      <option value="complete">Completed</option>
      <option value="incomplete">Incomplete</option>
    </DropDown>
  );
};

export default FilterDropDown;
