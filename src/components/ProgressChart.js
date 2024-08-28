import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function ProgressChart({ tasks }) {
  // Contagem de tarefas por status
  const todoTasks = tasks.filter(task => task.status === 'todo').length;
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress').length;
  const doneTasks = tasks.filter(task => task.status === 'done').length;

  // Dados para o gráfico
  const data = {
    labels: ['Pendente', 'Em Progresso', 'Concluída'],
    datasets: [
      {
        label: 'Progresso das Tarefas',
        data: [todoTasks, inProgressTasks, doneTasks],
        backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
      },
    ],
  };

  return (
    <div style={{ width: '50%', margin: '20px auto' }}>
      <h2>Progresso das Tarefas</h2>
      <Pie data={data} />
    </div>
  );
}

export default ProgressChart;
