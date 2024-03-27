import React from 'react';
import { format } from 'date-fns';

const TodoItem = ({ todo, onDelete, onComplete }) => {
  // Define a variable to store the CSS classes based on todo.status
  const cardClasses = `card shadow-sm ${todo.status ? '' : 'bg-light text-muted'}`;

  // Format the timestamp
  const formattedTimestamp = format(new Date(todo.timestamp), "do MMMM yyyy hh:mm a");

  return (
    <div className="col-md-7 mb-4">
      <div className={cardClasses}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.desc}</p>
            <p className="card-text" >{formattedTimestamp}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn btn-sm btn-danger me-2"
              onClick={() => {
                onDelete(todo);
              }}
            >
              Delete
            </button>
            <button
              className={`btn btn-sm ${todo.status ? 'btn-success' : 'btn-secondary'}`}
              onClick={() => {
                onComplete(todo);
              }}
              // disabled={!todo.status} // Disable button if todo.status is false
            >
              {todo.status ? 'Complete' : 'Completed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
