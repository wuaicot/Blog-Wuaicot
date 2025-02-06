import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiTerminal } from "react-icons/bi";
import { HiSun, HiMoon } from "react-icons/hi";
import { CgUserlane } from "react-icons/cg";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth, provider } from "../Firebase/Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { IoLogOutOutline } from "react-icons/io5";
import { SiCodefactor } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import Alert from "./Alert";
import { useDispatch } from "react-redux";

function Navbar({ topics }) {
  // ... (rest of your code)

  return (
    <>
      {/* ... (Alert component) */}
      <header className="fixed w-full border-t-4 bg-white dark:bg-dark border-indigo-600 dark:border-indigo-900 shadow dark:shadow-2 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex">
              <Link href="/" className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50"> {/* Added className to Link */}
                <span className="text-xl font-semibold">
                  <BiTerminal className="text-xl" />
                </span>
                <span className="mx-1 font-semibold text-base md:text-base">
                  Latest
                </span>
              </Link>

              <div className="dropdown inline-block relative mx-2">
                <button className="flex items-center hover:text-indigo-600 text-gray-800 dark:text-gray-50 mx-6 cursor-pointer"> {/* Changed <a> to <button> */}
                  <span className="text-xl font-semibold">
                    <SiCodefactor className="text-sm" />
                  </span>
                  <span className="mx-1 font-semibold text-base md:text-base">
                    Posts
                  </span>

                  <span className="text-xl font-semibold">
                    <IoMdArrowDropdown className="text-xl" />
                  </span>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700  bg-white dark:bg-dark w-40 pt-6 rounded-xl left-1/3">
                  {topics.map((topic) => (
                    <li className="cursor-pointer" key={topic}> {/* Added key prop here */}
                      <Link href={`/topic/${topic}`} className="rounded-xl bg-white dark:bg-dark text-gray-800 dark:text-gray-50 py-2 px-4 block whitespace-no-wrap"> {/* Added className to Link */}
                        {topic}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center -mx-3">
              {/* ... (Theme toggle button) */}

              <Link href="/about" className="flex items-center mx-2 lg:mx-4 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50"> {/* Added className to Link */}
                <span className="text-xl">
                  <CgUserlane className="text-xl" />
                </span>
              </Link>

              {/* ... (Sign in/out button) */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;