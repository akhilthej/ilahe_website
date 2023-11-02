import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import NavbarLogo from "./csdv2Logonavbar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <section class=" sticky top-0 z-50 bg-white/90 drop-shadow-lg hidden sm:block ">
      <div className=" sm:px-2 w-full h-17 flex justify-between items-center text-black ">
        <Link to="/">
          <img
            class="p-2 h-auto w-24  lg:w-32"
            src={NavbarLogo}
            alt="csd_logo"/>
        </Link>
        <div class=" justify-end ">
          <ul className="flex items-center">
            <Menu as="div" className="relative inline-block text-left ">
            </Menu>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/best-modeling-school-in-india">Modeling</Link>
            </li>

            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/best-Finishing-school-in-india">Finishing School</Link>
            </li>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/reviews">Reviews</Link>
            </li>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="p-4">
              <Menu as="div" className="relative inline-block text-left  ">
                <div>
                  <Menu.Button className=" text-3xl">
                  ☰
                  
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                    <div className="py-1  lg:hidden ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/best-modeling-school-in-india">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Modeling
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/best-Finishing-school-in-india">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Finishing School
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/reviews">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Reviews
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>

                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/aboutus">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            About ilahe
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/contactus">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Contactus
                          </a>
                        </Link>
                      )}
                    </Menu.Item>

                    
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};




export default Navbar;
