import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="Header_dash">
      <nav className="bg-gray-100 border-gray-800 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-3 mt-1 max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="../home_logo.png" className="mr-3 h-12" alt="Logo" />
          </Link>

          <div className="flex justify-center bg-gray-100 ml-25">
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/dashboard.html"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 hover:font-bold hover: lg:p-0`
                    }
                  >
                    Stocks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard.html/mutuals"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-900 font-bold" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 hover:font-bold lg:p-0`
                    }
                  >
                    Mutual Funds
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard.html/news"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-900 font-bold" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 hover:font-bold lg:p-0`
                    }
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/jay1617"
                    target="_blank"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-blue-900 font-bold" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 hover:font-bold lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center mr-2 lg:order-2">
            <div className="Dash_searchContainer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                style={{
                  fontSize: "13px",
                  fontFamily: "'Poppins','Times New Roman', Times, serif",
                }}
                type="text"
                placeholder="Look up live stock prices and more..."
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
