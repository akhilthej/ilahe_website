import React from 'react';

function SideNavbar() {
  return (
    <div className="fixed left-0 top-0 bg-gray-800 h-screen w-64 text-white p-4">
      <ul className="flex flex-col items-center justify-center">
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="/">Home</a>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="/about">About</a>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <a href="/services">Services</a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
}

export default SideNavbar;
