import { CiHeart } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

import useToggle from "../../hooks/useToggle";

const Navbar = () => {
  const [toggle, setToggle] = useToggle(false);

  return (
    <header className="w-full overflow-hidden">
      <nav className="flex items-center justify-between mx-5 md:mx-8 my-4">
        
        <div className="flex items-center font-bold text-2xl md:ml-12 cursor-pointer">
          <FaHome className="mr-1" />
          <h1>Furniro</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center">
            <li className="mx-7 cursor-pointer">Home</li>
            <li className="mx-7 cursor-pointer">Shop</li>
            <li className="mx-7 cursor-pointer">About</li>
            <li className="mx-7 cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div className="hidden md:flex items-center mr-18 text-2xl">
          <MdOutlinePersonOutline className="mr-4 cursor-pointer" />
          <FiSearch className="mr-4 cursor-pointer" />
          <CiHeart className="mr-4 cursor-pointer" />
          <IoCartOutline className="mr-4 cursor-pointer" />
        </div>

      
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-3xl"
        >
          {toggle ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {toggle && (
        <div className="md:hidden px-6 pb-5">
          <ul className="flex flex-col gap-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          
          <div className="flex items-center text-2xl mt-5">
            <MdOutlinePersonOutline className="mr-5 cursor-pointer" />
            <FiSearch className="mr-5 cursor-pointer" />
            <CiHeart className="mr-5 cursor-pointer" />
            <IoCartOutline className="cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
