import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import KanbanBoard from './components/KanbanBoard';
import ProgressChart from './components/ProgressChart'; // Importação do gráfico de progresso

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), text: newTask, status: 'todo' };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const moveTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Kanban de Tarefas</h1>
      <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <KanbanBoard tasks={tasks} moveTask={moveTask} />
      <ProgressChart tasks={tasks} /> {/* Renderização do gráfico de progresso */}
    </div>
  );
}

export default App;
