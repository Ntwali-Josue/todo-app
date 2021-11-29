import React from 'react';

const TodoItem = (props) => {
    return (
      <li>{props.todo.title}</li>
    )
}

export default TodoItem;
