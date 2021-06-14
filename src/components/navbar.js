import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import LogoNav from "../images/logonav.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="fixed w-full z-50 bg-white text-gray-900 dark:text-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="py-2 flex rounded-md text-lg no-underline items-center"
              >
                <img src={LogoNav} alt="logo" className="h-12 w-12" />
                <h1 className="font-bold text-xl text-black sm:ml-2 tracking-tight">
                  Royatul<span className="text-royah-yellow">Aliyah</span>
                </h1>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div className="hidden md:block mr-4">
                <div className="ml-10 flex items-baseline space-x-4 font-bold">
                  <Link
                    to="/yearbook"
                    className=" px-3 py-2 rounded-md  text-lg no-underline"
                  >
                    <h1>year book</h1>
                  </Link>

                  <Link
                    to="/keluarga"
                    className=" px-3 py-2 rounded-md text-lg no-underline"
                  >
                    <h1>keluarga</h1>
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex bg-white items-center dark:bg-gray-900 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center ml-2 justify-center p-2 rounded-md text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div
              className="md:hidden bg-white dark:bg-gray-900 shadow "
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/blog"
                  className="block px-3 py-2 rounded-md text-lg no-underline"
                >
                  Blog
                </Link>

                <Link
                  to="/reads"
                  className="block px-3 py-2 rounded-md text-lg no-underline"
                >
                  Reading List
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
