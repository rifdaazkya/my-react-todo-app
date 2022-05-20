import TodoList from "./Components/TodoList/TodoList";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const addNewItem = (text) => {
    setItems((items) => {
      const nextId = items.length + 1;
      const newItem = {
        id: nextId,
        text: text,
      };
      return [...items, newItem];
    });
  };
  const title = "Things to do";
  return (
    <div className="container">
      <div className="row">
        <TodoList items={items} title={title} addNewItem={addNewItem} />
      </div>
    </div>
  );
}

export default App;