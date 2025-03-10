import React, { useState, useEffect } from "react";
import NavbarLogo from "./csdv2Logonavbar.svg";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let closeTimeout;
    if (isOpen) {
      closeTimeout = setTimeout(() => {
        closeMenu();
      }, 7000); // Close menu after 7 seconds
    }

    return () => {
      clearTimeout(closeTimeout);
    };
  }, [isOpen]);

  return (
    <div className="z-10 sticky top-0 bg-white px-5 sm:hidden">
      <div className="flex items-center py-2">
      <Link to='/'><img
          className="h-auto w-24"
          src={NavbarLogo}
          alt="csd_logo"
        /></Link>
        <button className="text-3xl  ml-auto" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black p-4 flex flex-col justify-center items-center">
          <button
            className="text-2xl absolute top-2 right-2"
            onClick={closeMenu}
          >
            ✕
          </button>
          <Link to='/'><img
            className="pl-2 h-auto w-44 lg:w-52"
            src={NavbarLogo}
            alt="csd_logo"/></Link>
          
          <div className="flex flex-col mt-6">
          <Link to='/best-modeling-school-in-india'><a className="text-2xl my-2" onClick={closeMenu}>
              Modeling School
            </a></Link>
            <Link to='/best-Finishing-school-in-india'><a className="text-2xl my-2" onClick={closeMenu}>
              Finishing School
            </a></Link>
          <Link to='/aboutus'><a className="text-2xl my-2" onClick={closeMenu}>
              About ilahe
            </a></Link>
            <Link to='/contactus'><a className="text-2xl my-2" onClick={closeMenu}>
              Contact Us
            </a></Link>
            
            <Link to='/reviews'><a className="text-2xl my-2" onClick={closeMenu}>
            Reviews
            </a></Link>
            <Link to='/blogs'><a className="text-2xl my-2" onClick={closeMenu}>
              Blogs
            </a></Link>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
