import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          {task.text}
          <button onClick={() => removeTask(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
