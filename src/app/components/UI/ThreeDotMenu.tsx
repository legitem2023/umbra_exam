import React,{ useRef,useEffect,useState,ReactNode,ReactElement,FC} from "react";
import {ThreeDotProps} from '../../Types/types';

const ThreeDotMenu:FC<ThreeDotProps> = ({child1,child2}) => {
  const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef<HTMLDivElement>(null);
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
  
  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Three Dots Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
        <span className="text-xl">⋮</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            <li className="p-2">
              {child1()}
            </li>
            <li className="p-2">
              {child2()}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
