'use client'
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import { ColumnProps } from '../Types/types';


const Column: React.FC<ColumnProps> = ({
  id,
  column,
  title,
  tasks,
  onEditTask,
  onDeleteTask,
  onMoveTask,
}) => {
  return (
    <div className="flex-1 p-2 bg-gray-200 rounded-lg shadow-md">
      <h2 className="font-bold mb-4">{title}</h2>
      <Droppable
        droppableId={id}
        isDropDisabled={false}
        isCombineEnabled={false}
        ignoreContainerClipping={true}
      >
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="flex-1">
            {tasks.map((task, index) => (
              <Task
                columns={column}
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                tags={task.tags}
                dueDate={task.dueDate}
                createdAt={task.createdAt}
                onEdit={() => onEditTask(task.id)}
                onDelete={() => onDeleteTask(task.id)}
                onMoveLeft={() => onMoveTask(task.id, 'left')}
                onMoveRight={() => onMoveTask(task.id, 'right')}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;