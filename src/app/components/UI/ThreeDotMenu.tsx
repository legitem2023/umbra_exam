import { useState ,ReactElement,FC} from "react";

type ThreeDotprops = {
  child1:()=>ReactElement,
  child2:()=>ReactElement
}
const ThreeDotMenu:FC<ThreeDotprops> = ({child1,child2}) => {
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
              {child1}
            </li>
            <li>
              {child2}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
