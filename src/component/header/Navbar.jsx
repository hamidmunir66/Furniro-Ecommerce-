import { CiHeart } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

import useToggle from "../../hooks/useToggle";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const Navbar = () => {
  const [currentuser, setcurrentuser] = useLocalStorage("currentUser", null);
  const [toggle, setToggle] = useToggle(false);

  return (
    <header className="w-full ">
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
          
          {currentuser ? (
            <div className="relative group mr-4">
              <span className="cursor-pointer text-base font-semibold">
                {currentuser.name}
              </span>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg p-2 z-50">
                <button
                  onClick={() => {
                    setcurrentuser(null);
                  }}
                  className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <MdOutlinePersonOutline className="mr-4 cursor-pointer" />
            </Link>
          )}

          <FiSearch className="mr-4 cursor-pointer" />
          <CiHeart className="mr-4 cursor-pointer" />
          <Link to='/cart'>
          <IoCartOutline className="mr-4 cursor-pointer" />
          </Link>
        </div>

        <button onClick={setToggle} className="md:hidden text-3xl">
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
            <Link to="/login">
              <MdOutlinePersonOutline className="mr-5 cursor-pointer" />
            </Link>
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
