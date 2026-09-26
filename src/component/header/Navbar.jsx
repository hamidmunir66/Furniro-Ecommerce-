import { CiHeart } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className={`w-full  overflow-hidden `}>
        <nav className={`flex items-center justify-between mx-8 my-4 `}>
          <div className={`flex items-center font-bold text-2xl ml-12  cursor-pointer`}>
            <FaHome  className="mr-1"/>
            <h1>Furniro</h1>
          </div>
          <div >
            <ul className={`flex items-center  `}>
              <li className="mx-7 cursor-pointer">Home</li>
              <li className="mx-7 cursor-pointer">Shop</li>
              <li className="mx-7 cursor-pointer">About</li> 
              <li className="mx-7 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className={`flex items-center justify-between mr-18 text-2xl  `}>
            <MdOutlinePersonOutline className="mr-4 cursor-pointer" />
            <FiSearch className="mr-4 cursor-pointer"/>
            <CiHeart className="mr-4 cursor-pointer"/>
            <IoCartOutline className="mr-4 cursor-pointer"/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
