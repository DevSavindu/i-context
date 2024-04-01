import { FaHome, FaUser, FaChartBar, FaCog } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const SideMenu = ({ isOpen }) => {
  return (
        <aside className={`bg-gray-400 text-white fixed top-[70px] left-0 bottom-0 z-10 overflow-y-auto w-12  sm:w-12 md:w-48 xl:w-64 ${isOpen ? 'block' : 'hidden'}`}>
    <ul className="p-4">
        <li className="flex items-center mb-5">
          <FaHome className=" text-xl bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden">Dashboard</span>
        </li>
        <li className="flex items-center mb-5">
          <FaUser className="text-xl  bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden">Author</span>
        </li>
        <li className="flex items-center mb-5">
          <FaChartBar className="text-xl  bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden">Report</span>
        </li>
        <li className="flex items-center mb-5">
          <FaCog className="text-xl  bg-blue-400 md:hidden" />
          <span className="text-lg sm:inline-block hidden">Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
