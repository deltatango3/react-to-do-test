import React from "react";
import InputField from "../Input-Field/InputField";
import Button from "../Button/Button";
import FilterDropDown from "../Filter-Drop-Down/FilterDropDown";
import styled from "styled-components";

const FormWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormBlock = styled.div`
  background-color: #e6e6e6;
  padding: 4rem 10rem;
  width: 50%;
  position: relative;
  & h2 {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
  & form {
    display: flex;
    flex-direction: column;
    & label {
      font-weight: 600;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    & input {
      margin-bottom: 2.5rem;
      margin-right: 0;
    }
    & select {
      margin-bottom: 2.5rem;
    }
  }
`;

const ToDoForm = props => {
  //This feels redundant as I should be able to do it like the other handle changes using the setInputStates function, but it is currently not cooperating.
  const handleChange = input => {
    const newTitle = input.target.value;
    props.setNewTitle(newTitle);
  };
  const changeStatus = input => {
    const newStatus = input.target.value;
    props.setNewStatus(newStatus);
  };

  return (
    <FormWrapper>
      <FormBlock>
        {props.editMode ? (
          <React.Fragment>
            <h2>Edit Task</h2>
            <form onSubmit={props.editItem}>
              <label htmlFor="newTitle">Title</label>
              <InputField
                type={"text"}
                name={"newTitle"}
                onChange={handleChange}
                value={props.newTitle ? props.newTitle : ""}
              />
              <label htmlFor="status">Status</label>
              <FilterDropDown
                editMode={props.editMode}
                newStatus={props.newStatus}
                editableItem={props.editableItem}
                onChange={changeStatus}
              />
              <Button buttonName={"Edit"} type={"submit"} class={"on-modal"} />
            </form>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2>Add Task</h2>
            <form onSubmit={props.addNewItem}>
              <label htmlFor="newTitle">Title</label>
              <InputField
                type={"text"}
                name={"newTitle"}
                onChange={props.handleChange}
              />
              <label htmlFor="newUserId">User ID</label>
              <InputField
                type={"text"}
                name={"newUserId"}
                onChange={props.handleChange}
              />
              <Button buttonName={"Add"} type={"submit"} class={"on-modal"} />
            </form>
          </React.Fragment>
        )}
        <Button
          buttonName={"Close"}
          type={"button"}
          class={"close-btn"}
          action={props.closeForm}
        />
      </FormBlock>
    </FormWrapper>
  );
};

export default ToDoForm;
