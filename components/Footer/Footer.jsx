import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="flex-shrink-0">
                <h1 className="text-xl">
                  <span className="trapezium font-bold">S</span>
                  <span style={{ color: "black" }}>TITCHSAVVY</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg mt-2 w-[60%] md;w-full">
                  Discover, Shop, Enjoy - Your One-Stop Online Marketplace
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:flex md:gap-10">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Customer Service
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Shipping Information
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Returns & Exchanges
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Order Tracking
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Size Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal Information
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Cookies Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Quick Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Popular Categories
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      New Arrivals
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Best Sellers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Sale Items
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://Stichsavvy.com/" className="hover:underline">
                Stitchsavvy™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.025 4.025 0 0 0-.555 2.03 4.044 4.044 0 0 0 1.8 3.355 4.168 4.168 0 0 1-1.86-.5v.05a4.069 4.069 0 0 0 3.3 3.973 3.943 3.943 0 0 1-1.085.15c-.26 0-.53-.024-.78-.074a4.135 4.135 0 0 0 3.835 2.831A8.274 8.274 0 0 1 0 15.061 11.684 11.684 0 0 0 6.3 17c7.575 0 11.722-6.243 11.722-11.662 0-.18 0-.355-.014-.53A8.262 8.262 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .214a10 10 0 1 0 0 19.572A10 10 0 0 0 10 .214Zm3.08 6.169a1.761 1.761 0 1 1 0 3.522 1.761 1.761 0 0 1 0-3.522Zm-6.16 0a1.761 1.761 0 1 1 0 3.522 1.761 1.761 0 0 1 0-3.522ZM10 15.868a5.617 5.617 0 0 1-4.466-2.2.609.609 0 0 1 .862-.86 4.408 4.408 0 0 0 3.604 1.777 4.42 4.42 0 0 0 3.605-1.777.609.609 0 0 1 .863.86 5.617 5.617 0 0 1-4.468 2.2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .214a10 10 0 1 0 0 19.572A10 10 0 0 0 10 .214ZM8.01 14.656a.75.75 0 0 1-1.328-.705l3.5-6.597a.75.75 0 0 1 1.328.705l-3.5 6.597Zm.372-3.894a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Zm4.375 0a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
