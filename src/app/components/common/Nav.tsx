"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  // State Management
  const [open, setOpen] = useState(false);
  const [seo, setSeo] = useState("Test");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-600 text-gray-200 py-2 text-sm flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between px-4 gap-y-4">
          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="mailto:mhhasanul@gmail.com"
              className="flex items-center gap-1 hover:text-gray-200 font-semibold"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <span className="hidden sm:inline">mhhasanul@gmail.com</span>
            </a>
            <a
              href="tel:1234567890"
              className="flex items-center gap-1 hover:text-gray-200"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              <span className="hidden sm:inline">(12345)67890</span>
            </a>
          </div>

          {/* Language and Currency Options */}
          <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="relative cursor-pointer flex items-center gap-1">
              <span>English</span>
              <span className="text-xs">▼</span>
            </div>
            <div className="relative cursor-pointer flex items-center gap-1">
              <span>USD</span>
              <span className="text-xs">▼</span>
            </div>

            {/* User Actions */}
            <a href="myaccount.html" className="flex items-center gap-1 hover:text-gray-200">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
              <span className="hidden sm:inline">Login</span>
            </a>

            <a href="404" className="flex items-center gap-1 hover:text-gray-200">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
              <span className="hidden sm:inline">Wishlist</span>
            </a>

            <a href="shoppingcart.html" className="flex items-center hover:text-gray-200">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M528.12 301.319l-47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="white shadow-md wrapper text-hover-effect">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 h-10">
          {/* Brand Logo */}
          <a href="about.html">
            <div className="text-[#0D0E43] text-3xl font-bold family">Hekto</div>
          </a>

          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-6 text-base font-normal font-['Lato']">
            <a className="text-[#fb2e86]" href="index.html">Home</a>
            <a href="shopleftsidebar.html">Pages</a>
            <a href="products.html">Products</a>
            <a href="404-2">Blog</a>
            <a href="shoplist.html">Shop</a>
            <a href="contact.html">Contact</a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 h-10">
            <div className="relative">
              <input
                type="text"
                className="pr-20 h-10 text-sm text-gray-700 border-2 border-[#e7e6ef]"
              />
              <div className="w-[51px] h-10 left-[200px] top-0 absolute bg-[#fb2e86] flex items-center justify-center">
                <i className="text-white text-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
