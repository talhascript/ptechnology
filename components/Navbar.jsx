import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

const dropdownItems = [
  { name: "CAD design", href: "/services/CAD-design" },
  { name: "Digital Fabrication", href: "/services/digital-fabrication" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Perseverance Technology</span>
              <img
                className="h-12 w-auto hover:scale-125 transition-transform duration-300"
                src="logo.png"
                alt="perseverance technology logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* lg screen visible navigation items */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              // Use a conditional rendering approach here
              item.name === "Services" ? (
                // Render a Popover for the "Services" item
                <div
                  key={item.name}
                  className="relative"
                  onMouseLeave={() => setIsPopoverOpen(false)}
                >
                  <div
                    className={`
          text-md p-3 font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:shadow-lg hover:rounded-lg transform hover:-translate-y-1 transition-transform duration-300
        `}
                    onMouseEnter={() => setIsPopoverOpen(true)}
                  >
                    <div className="flex items-end">
                      <span>Services</span>
                      <ChevronDownIcon
                        className={`${isPopoverOpen ? "" : "text-opacity-70"}
              ml-2 h-5 w-5 text-black-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  {isPopoverOpen && (
                    <div className="absolute z-10 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-2">
                        {/* Dropdown menu items for "Services" */}
                        {dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                          >
                            <button onClick={() => setIsPopoverOpen(false)}>
                              {dropdownItem.name}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Render a normal link for other navigation items
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-md p-3 font-semibold leading-6 text-gray-900 hover:text-indigo-600 hover:shadow-lg hover:rounded-lg transform hover:-translate-y-1 transition-transform duration-300"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Login Signup */}

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login">
              <button className="px-4 py-2 mx-1 font-semibold text-white bg-blue-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transform transition-all duration-300 hover:bg-indigo-600 hover:ring hover:ring-indigo-600">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 mx-1 font-semibold text-blue-500 bg-white rounded-lg border border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transform transition-all duration-300 hover:bg-indigo-400 hover:text-white hover:scale-105">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on mobile menu state. */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Perseverance Technology</span>
                <img
                  className="h-12 w-auto hover:scale-125 transition-transform duration-300"
                  src="logo.png"
                  alt="perseverance technology logo"
                />
              </Link>

              {/* X Button */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    // Use a conditional rendering approach here
                    item.name === "Services" ? (
                      // Render a Popover for the "Services" item
                      <div key={item.name}>
                        <button
                          onClick={toggleServicesDropdown}
                          className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={`${
                              servicesDropdownOpen ? "transform rotate-180" : ""
                            } h-6 w-6`}
                          />
                        </button>
                        {servicesDropdownOpen && (
                          <div className="space-y-2">
                            {dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block rounded-lg pl-6 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                              >
                                <button onClick={toggleMobileMenu}>
                                  {dropdownItem.name}
                                </button>
                              </Link>
                            ))}

                            {/* Add more service links as needed */}
                          </div>
                        )}
                      </div>
                    ) : (
                      // Render a normal link for other navigation items
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <button onClick={toggleMobileMenu}>{item.name}</button>
                      </Link>
                    )
                  )}
                </div>

                <div className="py-6">
                  <Link href="/login">
                    <button className="px-4 py-2 mx-1 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="px-4 py-2 mx-1 font-semibold text-blue-500 bg-white rounded-lg hover:bg-gray-100 border border-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
