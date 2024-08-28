import React from 'react';
import TaskColumn from './TaskColumn';

function KanbanBoard({ tasks, moveTask }) {
  const columns = [
    { id: 'todo', title: 'Pendente', filter: (task) => task.status === 'todo' },
    { id: 'in-progress', title: 'Em Progresso', filter: (task) => task.status === 'in-progress' },
    { id: 'done', title: 'Concluída', filter: (task) => task.status === 'done' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      {columns.map((column) => (
        <TaskColumn
          key={column.id}
          title={column.title}
          tasks={tasks.filter(column.filter)}
          moveTask={moveTask}
          status={column.id}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
