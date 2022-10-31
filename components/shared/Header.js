import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../images/React 1.svg";
import styel from "../../styles/Navbar.module.css";

function Header({ children }) {
  return (
    <div className={styel.navbar}>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full flex px-5 md:px-20 justify-between py-4">
            <div className="text-white mb-4">
              <Image
                className=""
                src={logo}
                alt="logo"
              />
            </div>
            <div className="flex-none hidden lg:block">
              <div>
                <ul className="menu menu-horizontal text-yellow-500 font-bold">
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/confernce">Coference Info</Link>
                  </li>
                  <li>
                    <Link href="/whatwedo">What we do</Link>
                  </li>
                  <li>
                    <Link href="/ourwork">Our work</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/sayhi">Say hi</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-none">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 box-size text-white font-bold bg-red-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/confernce">Coference Info</Link>
            </li>
            <li>
              <Link href="/whatwedo">What we do</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/ourwork">Our work</Link>
            </li>
            <li>
              <Link href="/sayhi">Say hi</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
