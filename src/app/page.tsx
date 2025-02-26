// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { addTask } from './Redux/taskSlice';
import Nav from './components/Partial/Nav';
import { create } from 'domain';

// Dynamically import the Board component with SSR disabled
const Board = dynamic(() => import('./components/Board'), { ssr: false });

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({ title: '', description: '', columnId: 'todo', tags: [], dueDate: new Date().toDateString(),createdAt: new Date().toDateString() });

/**
 * Adds a new task to the specified column.
 * 
 * This function dispatches the `addTask` action with the current
 * `newTask` state, adding a unique `id` based on the current timestamp.
 * If the task title is empty, the function returns early without
 * dispatching. After adding the task, it resets the `newTask` state
 * to its initial values.
 */

  const handleAddTask = () => {
    if (!newTask.title) return;
    dispatch(
      addTask({
        ...newTask,
        id: Date.now().toString(),
      })
    );
    setNewTask({ title: '', description: '', columnId: 'todo', tags: [], dueDate: '',createdAt: new Date().toDateString() });
  };

  return (
    <>
    <Nav/>
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4 bg-gray-400 text-white p-2">Task Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 m-1 md:w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="border p-2 m-1 md:w-full"
        />
        <input
          type="date"
          placeholder="Date"
          defaultValue={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: new Date(e.target.value).toDateString() })}
          className="border p-2 m-1"
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 m-1">
          Add Task
        </button>
      </div>
      <Board />
    </div>
    </>
  );
};

export default Home;
