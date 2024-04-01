import { FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const NavigationBar = ({ toggleSideMenu }) => {
  return (
    <nav className="bg-blue-200 p-4 flex justify-between items-center text-gray-500 py-4">
      <button onClick={toggleSideMenu}>
        <FaBars className="text-2xl lg:text-gray-500" />
      </button>
 <h1 className="text-2xl font-bold text-blue-500 justify-center">Welcome</h1>

      <div className="flex items-center px-6">
        <button className="mr-4">
          <FaUser />
        </button>
        <button className="px-6 sm:px-2 py-2 bg-blue-500 hover:bg-blue-400 rounded-md">
        <FaSignOutAlt className='hidden md:inline-block text-white' />

  <span className="ml-2 sm:hidden md:inline-block text-white">Sign Out</span>
</button>

      </div>
    </nav>
  );
};

export default NavigationBar;
