import  { useState } from 'react';
import NavigationBar from './components/Navbar';
import SideMenu from './components/Sidebar';
import Footbox from './components/Footbox';
import Card from './components/Card';

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavigationBar toggleSideMenu={toggleSideMenu} />
      <div className="flex flex-1 overflow-hidden">
        <SideMenu isOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu} />
        <div className="overflow-y-auto flex-1"><Card /></div>
      </div>
      <Footbox />
    </div>
  );
}

export default App;
