import { useState } from "react";

const ThreeDotMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Three Dots Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <span className="text-xl">⋮</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Option 1
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Option 2
              </button>
            </li>
            <li>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Option 3
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
