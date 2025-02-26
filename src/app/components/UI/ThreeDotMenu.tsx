import { useState ,ReactElement} from "react";

type ThreeDotprops = {
  edit:()=>ReactElement,
  delete:()=>ReactElement
}
const ThreeDotMenu = ({edit,delete}) => {
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
              {edit}
            </li>
            <li>
              {delete}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
