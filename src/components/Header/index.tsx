"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ${
        sticky
          ? "fixed bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(77,109,232,0.1)]"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-0 lg:py-0">
          {/* === Mobile Layout: Logo Center, Hamburger Right === */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Centered Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
              <Link href="/" className="flex items-center justify-center">
                <Image
                  src="/images/logo/cellAiNew.png"
                  alt="CellAI logo"
                  width={130}
                  height={40}
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="CellAI logo dark"
                  width={130}
                  height={40}
                  className="hidden object-contain dark:block"
                />
              </Link>
            </div>

            {/* Hamburger Right */}
            <button
              onClick={toggleNavbar}
              aria-label="Mobile Menu"
              className="ml-auto flex h-10 w-10 flex-col items-center justify-center space-y-[6px] rounded-md transition-all duration-300 focus:outline-none"
            >
              <span
                className={`block h-[2px] w-6 bg-[#1E2A78] transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              ></span>
              <span
                className={`block h-[2px] w-6 bg-[#1E2A78] transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-[2px] w-6 bg-[#1E2A78] transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* === Desktop Layout === */}
          <div className="hidden w-full items-center justify-between lg:flex">
            {/* Logo Left */}
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-4" : "py-6"
              } max-w-[150px]`}
            >
              <Image
                src="/images/logo/cellAiNew.png"
                alt="logo"
                width={150}
                height={150}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={150}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>

            {/* Menu Center */}
            <nav className="flex items-center">
              <ul className="flex border-l border-[#E6EAFF]">
                {menuData.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`group relative border-r border-[#E6EAFF] ${
                      pathname === menuItem.path ? "bg-[#F8FAFF]" : ""
                    }`}
                  >
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`relative flex items-center justify-center px-6 py-3 text-[15px] font-semibold transition-all duration-300 ${
                          pathname === menuItem.path
                            ? "text-[#4D6DE8]"
                            : "text-[#1E2A78] hover:text-[#4D6DE8]"
                        }`}
                      >
                        {menuItem.title}
                        <span
                          className={`absolute bottom-0 left-0 h-[3px] w-0 bg-[#4D6DE8] transition-all duration-300 ${
                            pathname === menuItem.path
                              ? "w-full"
                              : "group-hover:w-full"
                          }`}
                        ></span>
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="flex w-full items-center justify-center px-6 py-3 text-[15px] font-semibold text-[#1E2A78] transition-all hover:text-[#4D6DE8]"
                        >
                          {menuItem.title}
                          <svg
                            className="ml-1 h-4 w-4 transition-transform"
                            style={{
                              transform:
                                openIndex === index
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Submenu */}
                        <div
                          className={`lg:absolute lg:top-full lg:left-0 lg:w-[200px] lg:rounded-md lg:bg-white lg:shadow-md dark:lg:bg-gray-900 ${
                            openIndex === index
                              ? "block"
                              : "hidden lg:group-hover:block"
                          }`}
                        >
                          {menuItem.submenu?.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F0F4FF] hover:text-[#4D6DE8] dark:text-gray-300 dark:hover:bg-gray-800"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side */}
            <div className="flex items-center justify-end">
              <ThemeToggler />
            </div>
          </div>

          {/* === Mobile Menu Dropdown === */}
          {navbarOpen && (
            <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-6 px-6 flex flex-col space-y-4 lg:hidden">
              {menuData.map((menuItem, index) => (
                <Link
                  key={index}
                  href={menuItem.path}
                  onClick={() => setNavbarOpen(false)}
                  className={`text-base font-medium ${
                    pathname === menuItem.path
                      ? "text-[#4D6DE8]"
                      : "text-[#1E2A78] hover:text-[#4D6DE8]"
                  }`}
                >
                  {menuItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
