import React,{ useState,ReactNode,ReactElement,FC} from "react";
import {ThreeDotProps} from '../../Types/types';

const ThreeDotMenu:FC<ThreeDotProps> = ({child1,child2}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Three Dots Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" h-[30px] w-[30px] p-2 rounded-full hover:bg-gray-200 focus:outline-none">
        <span className="text-xl">⋮</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            <li className="p-5">
              {child1()}
            </li>
            <li className="p-5">
              {child2()}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
