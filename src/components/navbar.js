import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import LogoNav from "../images/logonav.svg"

const NavLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="mx-3 text-lg no-underline border-b-2 border-transparent font-bold"
      activeClassName="border-royah-yellow"
    >
      <h1>{text}</h1>
    </Link>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav
        className={`fixed w-full z-50 bg-white bg-opacity-75 text-gray-900 shadow backdrop-filter backdrop-blur-md ${
          isOpen ? "rounded-b-xl lg:rounded-none" : "rounded-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="py-2 flex rounded-md text-lg no-underline items-center"
              >
                <img src={LogoNav} alt="logo" className="h-12 w-12" />
                <h1 className="font-bold text-xl text-black ml-2 tracking-tight">
                  Royatul<span className="text-royah-yellow">Aliyah</span>
                </h1>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div className="hidden lg:block mr-4">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/yearbook" text="yearbook" />
                  <NavLink to="/keluarga" text="keluarga" />
                </div>
              </div>

              <div className="-mr-2 flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center ml-2 justify-center p-2 rounded-md text-gray-800 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          className="px-8 lg:hidden"
          id="mobile-menu"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <Transition.Child
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          > */}
          <NavLink to="/yearbook" text="yearbook" />
          {/* </Transition.Child>
          <Transition.Child
            enter="transition ease-out duration-500 transform delay-100"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          > */}
          <NavLink to="/keluarga" text="keluarga" />
          {/* </Transition.Child> */}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
