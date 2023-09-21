import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Construction Co.</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Projects</a></li>
          <li><a href="#" className="text-white">Services</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;