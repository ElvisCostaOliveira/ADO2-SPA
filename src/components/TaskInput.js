import React from 'react';

function TaskInput({ newTask, setNewTask, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

export default TaskInput;
