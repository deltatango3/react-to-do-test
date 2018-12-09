import React, { Component } from "react";
import { getToDoList } from "./fetch/fetch";
import ToDoList from "./components/To-Do-List/ToDoList";
import Filter from "./components/Filter/Filter";
import Button from "./components/Button/Button";
import ToDoForm from "./components/To-Do-Form/ToDoForm";

import MainStyle from "./styles/MainStyle";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [],
      startItem: 0,
      endItem: 0,
      baseEndItem: 20,
      pageNumbers: [],
      userId: "",
      completed: "",
      form: false,
      editMode: false,
      editableItem: {},
      newTitle: "",
      newUserId: 0,
      newStatus: ""
    };
  }
  componentDidMount() {
    this.getData();
    this.setState({
      endItem: this.state.baseEndItem
    });
  }
  getData = async () => {
    let toDoList = await getToDoList();
    if (this.state.userId || this.state.completed) {
      //filter the to do list by user id
      this.filterList(toDoList, this.state.userId, this.state.completed);
    } else {
      this.setData(toDoList);
    }
  };
  findPageNumbers = toDoList => {
    let pages = [];
    for (let i = 1; i <= toDoList.length / this.state.endItem; i++) {
      pages.push(i);
    }
    this.setPageNumbers(pages);
  };
  addNewItem = e => {
    e.preventDefault();
    const { newTitle, newUserId, toDoList } = this.state;
    let updatedList = toDoList;
    updatedList.unshift({
      title: newTitle,
      userId: newUserId,
      id: toDoList.length + 1,
      completed: false
    });
    this.setData(updatedList);
    this.closeForm();
  };
  closeForm = () => {
    console.log("this is called");
    this.setState({ form: false });
  };
  editItem = e => {
    e.preventDefault();
    const { toDoList, editableItem, newStatus, newTitle } = this.state;
    const updatedList = toDoList;
    const toDoItem = updatedList[editableItem.id - 1];
    toDoItem.completed = newStatus;
    console.log(newStatus);
    toDoItem.title = newTitle;
    this.setState({
      toDoList: updatedList,
      editMode: false,
      form: false
    });
  };
  editItemMode = item => {
    this.setFormState();
    this.setState({
      editMode: true,
      editableItem: item,
      newTitle: item.title,
      newStatus: item.completed
    });
  };
  filterList = (toDoList, userId = "", completed = "") => {
    //If time refactor this entire function. I don't like it.
    let filteredToDoList = toDoList;
    if (userId && completed === "complete") {
      filteredToDoList = toDoList.filter(toDoItem => {
        return (
          toDoItem.completed === true && toDoItem.userId === parseInt(userId)
        );
      });
    } else if (userId && completed === "incomplete") {
      filteredToDoList = toDoList.filter(toDoItem => {
        return (
          toDoItem.userId === parseInt(userId) && toDoItem.completed === false
        );
      });
    }
    if ((userId && !completed) || completed === "all") {
      //Refactor this to a resuable function.
      filteredToDoList = toDoList.filter(toDoItem => {
        return toDoItem.userId === parseInt(userId);
      });
    }
    if (!userId && completed === "complete") {
      filteredToDoList = toDoList.filter(toDoItem => {
        return toDoItem.completed === true;
      });
    }
    if (!userId && completed === "incomplete") {
      filteredToDoList = toDoList.filter(toDoItem => {
        return toDoItem.completed === false;
      });
    }
    if (!userId && completed === "all") {
      filteredToDoList = toDoList;
    }
    this.setData(filteredToDoList);
  };
  //This sort function probably looks more complicated than it should be.
  //Initial idea was to create one function for both strings and integers but I abondoned it.
  sortListByString = (sortItem, paramItem = "") => {
    const sortBy = sortItem;
    const param = paramItem;
    const sorted = this.state.toDoList.sort((a, b) => {
      let alc = a[sortBy] + param,
        blc = b[sortBy] + param;
      return alc > blc ? 1 : alc < blc ? -1 : 0;
    });
    this.setState({
      toDoList: sorted
    });
  };
  sortListByNumber = sortItem => {
    const sortBy = sortItem;
    const sorted = this.state.toDoList.sort((a, b) => a[sortBy] - b[sortBy]);
    this.setData(sorted);
  };
  handleChange = input => {
    console.log(input.target.value, input.target.name);
    this.setInputState({ [input.target.name]: input.target.value });
  };
  setData = toDoList => {
    this.setState({ toDoList });
    this.findPageNumbers(toDoList);
  };
  setPageNumbers = pageNumbers => {
    this.setState({ pageNumbers });
  };
  setInputState = input => {
    const { userId, status, newTitle, newUserId } = input;
    if (userId || userId === "") {
      this.setState({ userId }, () => {
        this.getData();
      });
    }
    if (status) {
      this.setState({ completed: status }, () => {
        this.getData();
      });
    }
    if (newTitle) {
      this.setState({ newTitle });
    }
    if (newUserId) {
      this.setState({ newUserId });
    }
  };
  setStartAndEnd = (startItem, endItem) => {
    this.setState({
      startItem,
      endItem
    });
  };
  setFormState = () => {
    this.setState({
      form: true
    });
    this.setState({ editMode: false });
  };
  setNewTitle = newTitle => {
    this.setState({ newTitle });
  };
  setNewStatus = newStatus => {
    console.log(newStatus);
    let status;
    if (newStatus === "complete") {
      status = true;
    }
    if (newStatus === "incomplete") {
      status = false;
    }
    this.setState({ newStatus: status });
  };
  render() {
    const {
      toDoList,
      startItem,
      endItem,
      baseEndItem,
      pageNumbers,
      form,
      editMode,
      editableItem,
      newTitle,
      newStatus
    } = this.state;
    return (
      <React.Fragment>
        <MainStyle />
        <h1>To Do List</h1>
        <Button
          buttonName={"Add +"}
          buttonType={"button"}
          action={this.setFormState}
          class={"add"}
        />
        {form ? (
          <ToDoForm
            handleChange={this.handleChange}
            addNewItem={this.addNewItem}
            handleSubmit={this.handleSubmit}
            editItem={this.editItem}
            setNewTitle={this.setNewTitle}
            setNewStatus={this.setNewStatus}
            closeForm={this.closeForm}
            editMode={editMode}
            editableItem={editableItem}
            newTitle={newTitle}
            newStatus={newStatus}
          />
        ) : null}
        <Filter setFilter={this.setFilter} handleChange={this.handleChange} />
        <ToDoList
          toDoList={toDoList}
          startItem={startItem}
          endItem={endItem}
          baseEndItem={baseEndItem}
          pageNumbers={pageNumbers}
          setStartAndEnd={this.setStartAndEnd}
          sortListByString={this.sortListByString}
          sortListByNumber={this.sortListByNumber}
          editItemMode={this.editItemMode}
        />
      </React.Fragment>
    );
  }
}

export default App;
