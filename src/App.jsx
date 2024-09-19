import React, { useState } from 'react';
import Header from './components/header.jsx';
import Input from './components/Input';
import TodoList from './components/TodoList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Input addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}