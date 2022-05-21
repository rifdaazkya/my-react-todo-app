import React from "react"

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import PaginateList from "../Components/PagineList"

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} addNewItem={props.addNewItem} />
      <ul className="list-group list-group-flush">
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
      </ul>
      <Footer items={props.items} />
    </div>
  );
};

export default TodoList;