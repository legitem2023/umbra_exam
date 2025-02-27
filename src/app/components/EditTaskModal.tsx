'use client';
import React, { useState } from 'react';
import { EditTaskModalProps } from '../Types/types';

  

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [dueDate, setDueDate] = useState(task.dueDate || '');


  const handleSave = () => {
    onSave({ title, description,dueDate });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[95%] md:w-[40%] bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        Task Title
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        Description
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        Due Date
        <input type='date'
          defaultValue={task.dueDate}
          onChange={(e) => setDueDate(new Date(e.target.value).toDateString())}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-500 text-white p-2 mr-2 w-[100px] rounded">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 w-[100px] rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;