import React from 'react';

function TaskColumn({ title, tasks, moveTask, status }) {
  return (
    <div style={{ width: '30%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
      <h2>{title}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <span>{task.text}</span>
            {status !== 'todo' && (
              <button onClick={() => moveTask(task.id, 'todo')}>{"<-"}</button>
            )}
            {status !== 'done' && (
              <button onClick={() => moveTask(task.id, status === 'todo' ? 'in-progress' : 'done')}>
                {status === 'todo' ? '->' : '->'}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskColumn;
