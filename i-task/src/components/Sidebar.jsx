import { FaHome, FaUser, FaChartBar, FaCog } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const SideMenu = ({ isOpen }) => {
  return (
        <aside className={`bg-gray-400 text-white fixed top-[70px] left-0 bottom-0 z-10 overflow-y-auto w-12  sm:w-12 md:w-48 xl:w-64 ${isOpen ? 'block' : 'hidden'}`}>
    <ul className="p-4">
        <li className="flex items-center mb-9  font-semibold">
          <FaHome className=" text-2xl bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden cursor-pointer  hover:text-blue-950 duration-300">Dashboard</span>
        </li>
        <li className="flex items-center mb-9 font-semibold">
          <FaUser className="text-2xl  bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden cursor-pointer hover:text-blue-950 duration-300">Author</span>
        </li>
        <li className="flex items-center mb-9 font-semibold">
          <FaChartBar className="text-2xl  bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden cursor-pointer hover:text-blue-950 duration-300">Report</span>
        </li>
        <li className="flex items-center mb-9 font-semibold">
          <FaCog className="text-2xl  bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden cursor-pointer hover:text-blue-950 duration-300">Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
