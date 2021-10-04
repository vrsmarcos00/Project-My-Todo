import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import { MdDelete } from 'react-icons/md';

const TodoList = ({ todos, onToggle, onRemove }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id.toString()}>
        <span
          className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          onClick={() => onToggle && onToggle(todo)}
          onKeyPress={() => onToggle && onToggle(todo)}
          role="button"
          tabIndex={0}
        >
          {todo.title}
        </span>

        <button
          className="remove"
          type="button"
          onClick={() => onRemove && onRemove(todo)}
        >
          <MdDelete size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
