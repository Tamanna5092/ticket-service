import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-[#000000]">
                <a>Home</a>
              </li>
              <li className="text-[#000000]">
                <a>FAQ</a>
              </li>
              <li className="text-[#000000]">
                <a>Changelog</a>
              </li>
              <li className="text-[#000000]">
                <a>Blog</a>
              </li>
              <li className="text-[#000000]">
                <a>Download</a>
              </li>
              <li className="text-[#000000]">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-xl md:text-2xl text-[#130B2D] font-bold">
            CS — Ticket System
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[#000000]">
              <a>Home</a>
            </li>
            <li className="text-[#000000]">
              <a>FAQ</a>
            </li>
            <li className="text-[#000000]">
              <a>Changelog</a>
            </li>
            <li className="text-[#000000]">
              <a>Blog</a>
            </li>
            <li className="text-[#000000]">
              <a>Download</a>
            </li>
            <li className="text-[#000000]">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex ml-6">
          <a className="btn text-white bg-linear-65 from-[#632EE3] to-[#9F62F2] px-4 md:px-6 py-3">
            <FaPlus /> New Ticket
          </a>
        </div>
      </div>
    </div>
  );
}
