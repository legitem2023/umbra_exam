'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './Column';
import { useDispatch, useSelector } from 'react-redux';
import { moveTask, editTask, deleteTask } from '../Redux/taskSlice';
import { RootState } from '../Redux/store';
import EditTaskModal from './EditTaskModal';
import { Task } from '../Types/types';
import Loading from './UI/Loading';
import { Icon } from '@iconify/react/dist/iconify.js';
const Board: React.FC = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.tasks.columns);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState<'title' | 'dueDate' | 'createdAt'>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [loading,setLoading] = useState(true);
  // Handle task movement
  const handleTaskMove = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    dispatch(moveTask({ source, destination }));
  };

  // Handle task editing
  const handleEditTask = (taskId: string) => {
    const task = columns
      .flatMap((col) => col.tasks)
      .find((t) => t.id === taskId);
    if (task) {
      setEditingTask(task);
    }
  };

  // Handle saving task edits
  const handleSaveTask = (updatedTask: Partial<Task>) => {
    if (editingTask) {
      dispatch(editTask({ taskId: editingTask.id, updatedTask }));
      setEditingTask(null);
    }
  };

  // Handle task deletion
  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleSaveTag = (updatedTask: Partial<Task>) => {
    if (editingTask) {
      dispatch(editTask({ taskId: editingTask.id, updatedTask }));
      setEditingTask(null);
    }
  };


  // Handle moving tasks between columns
  const handleMoveTask = (taskId: string, direction: 'left' | 'right') => {
    const task = columns.flatMap((col) => col.tasks).find((t) => t.id === taskId);
    if (!task) return;

    const currentColumnIndex = columns.findIndex((col) => col.tasks.some((t) => t.id === taskId));
    const targetColumnIndex = direction === 'left' ? currentColumnIndex - 1 : currentColumnIndex + 1;

    if (targetColumnIndex < 0 || targetColumnIndex >= columns.length) return;

    const sourceColumn = columns[currentColumnIndex];
    const destColumn = columns[targetColumnIndex];

    dispatch(
      moveTask({
        source: {
          droppableId: sourceColumn.id,
          index: sourceColumn.tasks.findIndex((t) => t.id === taskId),
        },
        destination: {
          droppableId: destColumn.id,
          index: destColumn.tasks.length, // Move to the end of the target column
        },
      })
    );
  };

  // Filter tasks based on search query
  const filteredColumns = columns.map((column) => ({
    ...column,
    tasks: column.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  }));

  // Sort tasks based on selected criteria and order
  const sortedColumns = filteredColumns.map((column) => ({
    ...column,
    tasks: [...column.tasks].sort((a, b) => {
      let comparison = 0;
      if (sortCriteria === 'title') {
        comparison = a.title.localeCompare(b.title);
      } else if (sortCriteria === 'dueDate') {
        comparison = new Date(a.dueDate || 0).getTime() - new Date(b.dueDate || 0).getTime();
      } else if (sortCriteria === 'createdAt') {
        comparison = new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    }),
  }));

// ⬇️ Check if Redux data is still loading

useEffect(() => {
  if (columns.length > 0) {
    setLoading(false);
  }
}, [columns]);


 if(loading) return (
    <Loading/>
  );

  return (
    <>
      <DragDropContext onDragEnd={handleTaskMove}>
        <div className="p-1">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 mb-4 w-full"
          />

          {/* Sort Options */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setSortCriteria('title')}
              className={`p-1 text-xs ${sortCriteria === 'title' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Sort by Title
            </button>
            <button
              onClick={() => setSortCriteria('dueDate')}
              className={`p-1 text-xs ${sortCriteria === 'dueDate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Sort by Due Date
            </button>
            <button
              onClick={() => setSortCriteria('createdAt')}
              className={`p-1 text-xs ${sortCriteria === 'createdAt' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Sort by Creation Time
            </button>
          <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-1 text-xs bg-green-500 text-white"
            >
              {sortOrder === 'asc' ? (<Icon icon="cuida:sort-ascending-duotone" width="24" height="25" />) : (<Icon icon="cuida:sort-descending-duotone" width="24" height="25" />) }
            </button>
          </div>

          {/* Columns */}
          <div className="flex flex-col gap-4 lg:flex-wrap lg:flex-row">
            {sortedColumns.map((column) => (
              <Column
                column={column.title}
                key={column.id}
                id={column.id}
                title={column.title}
                tasks={column.tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onMoveTask={handleMoveTask} // ✅ Fixed (Previously handleMoveTask)
              />
            ))}
          </div>
        </div>
      </DragDropContext>

      {/* Edit Task Modal */}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={handleSaveTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </>
  );
};

export default Board;
