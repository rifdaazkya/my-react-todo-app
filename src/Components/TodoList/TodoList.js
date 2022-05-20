import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <Header title={props.title} addNewItem={props.addNewItem} />
      <ul className="list-group list-group-flush">
        {props.items.map((item, i) => (
          <TodoItem item={item} key={i} />
        ))}
      </ul>
      <Footer items={props.items} />
    </div>
  );
};

export default TodoList;