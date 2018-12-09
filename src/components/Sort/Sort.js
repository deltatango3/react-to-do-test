import React from "react";
import styled from "styled-components";

const SortList = styled.ul`
  display: flex;
  padding: 3rem 3rem 3rem;
  background-color: #000;
`;

const SortItem = styled.li`
  flex: 1 0 10%;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  &:first-child {
    margin-right: 4rem;
  }
  &.long-sort-item {
    flex: 1 0 70%;
  }
`;

const Sort = props => {
  return (
    <SortList>
      <SortItem
        onClick={() => {
          props.sortListByString("completed");
        }}
      >
        Status
      </SortItem>
      <SortItem
        className="long-sort-item"
        onClick={() => {
          props.sortListByString("title", ".toLowerCase()");
        }}
      >
        Title
      </SortItem>
      <SortItem
        onClick={() => {
          props.sortListByNumber("id");
        }}
      >
        ID
      </SortItem>
      <SortItem
        onClick={() => {
          props.sortListByNumber("userId");
        }}
      >
        User ID
      </SortItem>
    </SortList>
  );
};

export default Sort;
