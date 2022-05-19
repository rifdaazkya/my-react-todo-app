import React from 'react'
import Header from './Header';
import TodoItem from './TodoItem';

const TodoList = (props) => {

  return (
    <>
      <Header title={props.title}/>
      <ul className="list-group list-group-flush">
        {props.items.map((item, index) => (
          <li className="list-group-item">
            <TodoItem item={item} key={index} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList