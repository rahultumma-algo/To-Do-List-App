import React from 'react';
import TodoItem from "./Todo";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-4'>To Do List</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {props.todos.map((todo) => (
          <div className="col" key={todo.sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} onComplete={props.onComplete}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
