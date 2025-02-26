// import { editTask } from '@/app/Redux/taskSlice';
// import { Task } from '@/app/Types/types';
// import React, { useState, useRef, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// type Tag = {
//     tag:any,
//     id:string
// }
// const Dropdown: React.FC<Tag> = ({tag,id}) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState<string>(tag);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//  const dispatch = useDispatch();
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);


//   const handleSelect = (id:string,updatedTask: Partial<Task>) => {
//     let option:any = updatedTask.tags;
//     setSelectedOption(option);
//     dispatch(editTask({ taskId: id,updatedTask}));
//     setIsOpen(false);
//   };


//   return (
//     <div className="relative w-60" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full text-left bg-white  shadow-sm flex justify-between items-center ml-2"
//       >
//         {selectedOption}
//         <span className="text-gray-500">&#9662;</span>
//       </button>

//       {isOpen && (
//         <ul className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
//           <li
//             onClick={() => handleSelect(id,{tags:["Low Priority"]})}
//             className="p-3 cursor-pointer hover:bg-gray-100"
//           >
//             Low Priority
//           </li>
//           <li
//             onClick={() => handleSelect(id,{tags:["Normal"]})}
//             className="p-3 cursor-pointer hover:bg-gray-100"
//           >
//             Normal
//           </li>
//           <li
//             onClick={() => handleSelect(id,{tags:["Urgent"]})}
//             className="p-3 cursor-pointer hover:bg-gray-100"
//           >
//             Urgent
//           </li>
//           <li
//             onClick={() => handleSelect(id,{tags:["Critical"]})}
//             className="p-3 cursor-pointer hover:bg-gray-100"
//           >
//             Critical
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
import { editTask } from '@/app/Redux/taskSlice';
import { Task } from '@/app/Types/types';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

type DropdownProps = {
  tag: any;
  id: string;
};

const Dropdown: React.FC<DropdownProps> = ({ tag, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(tag);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  // Handle click outside dropdown
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  // Handle selecting an option
  const handleSelect = (updatedTag: string) => {
    setSelectedOption(updatedTag);
    dispatch(editTask({ taskId: id, updatedTask: { tags: [updatedTag] } }));
    setIsOpen(false);
  };

  const options = ["Low Priority", "Normal", "Urgent", "Critical"];

  return (
    <div className="relative w-60" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-white shadow-sm flex justify-between items-center p-2 border rounded"
      >
        {selectedOption}
        <span className="text-gray-500">&#9662;</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="text-sm p-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

