import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Done from './Stages/Done';
import ThreeDotMenu from './UI/ThreeDotMenu';
import { TaskProps } from '../Types/types';
import { useDispatch } from 'react-redux';
import { editTask } from '../Redux/taskSlice';
import ReusableDropdown from './UI/ReusableDropdown';

const Task: React.FC<TaskProps> = ({
  id,
  columns,
  title,
  description,
  tags,
  dueDate,
  createdAt,
  onEdit,
  onDelete,
  onMoveLeft,
  onMoveRight,
  index,
}) => {
  const isOverdue = (dueDate: string) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diffInTime = now.getTime() - due.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    if (diffInDays > 1) {
      return 'rose';
    } else if (diffInDays >= 0 && diffInDays < 2) {
      return 'yell';
    } else {
      return 'bg-white-100';
    }
  };

  const dispatch = useDispatch();
    const handleSelect = (updatedTag: string) => {
      dispatch(editTask({ taskId: id, updatedTask: { tags: [updatedTag] } }));
    };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative bg-white p-4 rounded-lg shadow-md mb-4 ${isOverdue(
            dueDate || ''
          )}`}
        >
          {columns === 'Done' && <Done />}

          <div className="absolute top-0 right-0 m-2">
            <ThreeDotMenu
              child1={() => (
                <button
                  onClick={onEdit}
                  className="w-full text-[#f49f00] hover:text-orange-700 flex flex-row items-center"
                >
                  <Icon icon="tabler:edit" width="30" height="30" /> Edit
                </button>
              )}
              child2={() => (
                <button
                  onClick={onDelete}
                  className="w-full text-red-500 hover:text-red-700 flex flex-row items-center"
                >
                  <Icon icon="ph-trash-fill" width="30" height="30" /> Delete
                </button>
              )}
            />
          </div>

          <h3 className="font-semibold">{title}</h3>
          {description && <p className="text-sm min-h-[150px]">{description}</p>}

          <div className="flex items-center mt-4 mb-4">
            <p className="text-sm">Tags:</p>
            <ReusableDropdown
              options={['Low Priority', 'Normal', 'Urgent', 'Critical']}
              text={tags?.[0] || 'Normal'}
              onSelect={handleSelect}
            />
          </div>

          <div className="flex flex-col absolute left-0 bottom-0 m-4">
            <p className="text-sm">Created Date: {createdAt}</p>
            <p className="text-sm">Due Date: {dueDate}</p>
          </div>

          {columns === 'To Do' && (
            <div className="flex justify-end m-1 space-x-1">
              <button onClick={onMoveRight} className="hover:text-gray-700 w-8">
                <Icon
                  icon="ic:sharp-double-arrow"
                  width="24"
                  height="24"
                  className="text-black-800 hover:text-orange-700"
                />
              </button>
            </div>
          )}

          {columns === 'In Progress' && (
            <>
              <div className="flex justify-end m-1 space-x-1">
                <button onClick={onMoveRight} className="hover:text-gray-700 w-8">
                  <Icon icon="ic:sharp-double-arrow" width="24" height="24" style={{ color: '#000000' }} />
                </button>
              </div>
              <div className="flex justify-end m-1 space-x-1">
                <button onClick={onMoveLeft} className="text-gray-500 hover:text-gray-700 w-8">
                  <Icon
                    icon="ic:sharp-double-arrow"
                    width="24"
                    height="24"
                    style={{ color: '#000000', transform: 'rotate(180deg)' }}
                  />
                </button>
              </div>
            </>
          )}

          {columns === 'Done' && (
            <div className="flex justify-end m-1 space-x-1">
              <button onClick={onMoveLeft} className="text-gray-500 hover:text-gray-700 w-8">
                <Icon
                  icon="ic:sharp-double-arrow"
                  width="24"
                  height="24"
                  style={{ color: '#000000', transform: 'rotate(180deg)' }}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
