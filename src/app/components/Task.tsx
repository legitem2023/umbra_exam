import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Done from './Stages/Done';
import ThreeDotMenu from './UI/ThreeDotMenu';
import { TaskProps } from '../Types/types';
import Dropdown from './UI/Dropdown';


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
        if(diffInDays > 1){
            return 'bg-red-200';
        }
        else if(diffInDays >= 0 && diffInDays < 2){
            return 'bg-yellow-200';
        }
        else{
            return 'bg-white-100';
        }
    };
    
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative bg-white p-4 rounded-lg shadow-md mb-4` + ` ${isOverdue(dueDate || '')}`}
        >
          {columns==='Done'?(<Done/>):(<></>)}
<div className="absolute top-0 right-0 m-4">
<ThreeDotMenu/>
</div>
          <h3 className="font-semibold">{title}</h3>
          {description && <p className="text-sm min-h-[100px]">{description}</p>}

        
            <div className="flex items-center">
            <p className="text-sm">Tags:</p>

              <Dropdown tag={tags} id={id}/>
            </div>
            <div className="flex flex-col absolute left-0 bottom-0 m-4 ">
                <p className="text-sm">Created Date: {createdAt}</p>
                <p className="text-sm">Due Date: {dueDate}</p>
            </div>
        {/* */}
        <div>
          {columns==='To Do'?(<>
            <div className="flex justify-end m-1 space-x-1">
            <button onClick={onMoveRight} className="hover:text-gray-700 w-8">
               <Icon icon="ic:sharp-double-arrow" width="24" height="24"  className='text-black-800 hover:text-orange-700' />
            </button>
          </div>
          </>):(<></>)}
          
          {columns==='In Progress'?(<>
            <div className="flex justify-end m-1 space-x-1">
            <button onClick={onMoveRight} className="hover:text-gray-700 w-8">
               <Icon icon="ic:sharp-double-arrow" width="24" height="24"  style={{color: "#000000"}} />
            </button>
          </div>
          <div className="flex justify-end m-1 space-x-1">
          <button onClick={onMoveLeft} className="text-gray-500 hover:text-gray-700 w-8">
            <Icon icon="ic:sharp-double-arrow" width="24" height="24"  style={{color: "#000000", transform: "rotate(180deg)"}} />
            </button>
          </div>
          </>):(<></>)}
          {columns==='Done'?(<>
          <div className="flex justify-end m-1 space-x-1">
          <button onClick={onMoveLeft} className="text-gray-500 hover:text-gray-700 w-8">
            <Icon icon="ic:sharp-double-arrow" width="24" height="24"  style={{color: "#000000", transform: "rotate(180deg)"}} />
            </button>
          </div>
          </>):(<></>)}
          </div>
        {/* */}
        <div className="flex justify-end">
            <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
            <Icon icon="tabler:edit" width="24" height="24"  style={{color: "#f49f00"}} />
            </button>
            <button onClick={onDelete} className="text-red-500 hover:text-red-700">
            <Icon icon="ph-trash-fill" width="24" height="24"  style={{color: "#f40000"}} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
