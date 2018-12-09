import React from "react";
import ToDoItem from "../To-Do-Item/ToDoItem";
import Pagination from "../Pagination/Pagination";
import Sort from "../Sort/Sort";
import styled from "styled-components";

const ListContainer = styled.section`
  width: 80%;
  margin: 0 auto;
`;
const List = styled.ul`
  background: #fff;
  border: 1px solid #eee;
  padding: 3rem;
  /* box-shadow: 7px 5px 5px 0px #efefef; */
  display: flex;
  flex-wrap: wrap;
`;

const ToDoList = props => {
  return (
    <ListContainer>
      <Sort
        sortListByString={props.sortListByString}
        sortListByNumber={props.sortListByNumber}
      />
      <List>
        <ToDoItem
          toDoList={props.toDoList}
          startItem={props.startItem}
          endItem={props.endItem}
          editItemMode={props.editItemMode}
        />
      </List>
      <Pagination
        pageNumbers={props.pageNumbers}
        baseEndItem={props.baseEndItem}
        setStartAndEnd={props.setStartAndEnd}
      />
    </ListContainer>
  );
};

export default ToDoList;
