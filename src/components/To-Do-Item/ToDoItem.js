import React from "react";
import styled from "styled-components";

const Item = styled.li`
  flex: 1 0 100%;
  display: flex;
  padding: 2rem 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;
`;

const SmallSpace = styled.p`
  flex: 1 0 10%;
  &.status {
    margin-right: 4rem;
  }
`;

const LargeSpace = styled.p`
  flex: 1 0 70%;
`;

const ToDoItem = props => {
  return props.toDoList.slice(props.startItem, props.endItem).map(toDoItem => {
    return (
      <Item
        key={toDoItem.id}
        onClick={() => {
          props.editItemMode(toDoItem);
        }}
      >
        <SmallSpace className="status">
          {toDoItem.completed === false ? "Incomplete" : "Done"}
        </SmallSpace>
        <LargeSpace>{toDoItem.title}</LargeSpace>
        <SmallSpace>{toDoItem.id}</SmallSpace>
        <SmallSpace>{toDoItem.userId}</SmallSpace>
      </Item>
    );
  });
};

export default ToDoItem;
