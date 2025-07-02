import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the window width and update state
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const hideSidenav = () => {
    $("aside").toggleClass("-ml-80");
  };
  
  const location = useLocation();
  const isLogin = ["/"].includes(location.pathname);
  return (
    <>
      <div className={isLogin ? "hidden" : ""}>
        <aside
          className={`h-screen overflow-auto  transition-all  duration-300 absolute inset-0 sm:static z-50 w-full sm:w-64 cursor-auto ${
            isSmallScreen ? "-ml-80" : ""
          }`}
        >
          <div className="transition-opacity duration-200 overflow-y-auto py-4 px-3 h-full rounded bg-neutral-900 w-full">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-20">
                <div className="flex justify-between items-center mb-5">
                  <h1 className="text-center text-2xl uppercase font-semibold text-neutral-400 ">
                    Gbet Manager
                  </h1>{" "}
                  <button
                    className="sm:hidden text-white text-2xl cursor-pointer"
                    onClick={hideSidenav}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                    </svg>
                  </button>
                </div>
                <ul className="grid divide-y divide-neutral-600 ">
                  <li className=" w-full">
                    <Link to="/dashboard">
                      <div className="bg-neutral-700 shadow-lg w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                        <div className="text-lg">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                        </div>
                        <span className="flex-1 ml-3">Dashboard</span>
                      </div>
                    </Link>
                  </li>
                  <li className=" w-full ">
                    <button
                      type="button"
                      className="z-10 my-2 flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-neutral-700"
                      onClick={() => toggleMenu("menu1")}
                    >
                      <span className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <desc />
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={21} y1={17} x2={3} y2={17} />
                          <path d="M6 10l-3 -3l3 -3" />
                          <line x1={3} y1={7} x2={21} y2={7} />
                          <path d="M18 20l3 -3l-3 -3" />
                        </svg>
                      </span>
                      <span className="flex-1 ml-3 text-left">
                        Transactions
                      </span>
                      <span className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className={`max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-700 space-y-2 w-full bg-neutral-800 bg-opacity-50 rounded-lg ${
                        openMenus["menu1"] ? "max-h-screen" : ""
                      }`}
                    >
                      <li className=" w-full">
                        <Link to="/transactions/requests/deposit">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M298.9 24.31c-14.9.3-25.6 3.2-32.7 8.4l-97.3 52.1-54.1 73.59c-11.4 17.6-3.3 51.6 32.3 29.8l39-51.4c49.5-42.69 150.5-23.1 102.6 62.6-23.5 49.6-12.5 73.8 17.8 84l13.8-46.4c23.9-53.8 68.5-63.5 66.7-106.9l107.2 7.7-1-112.09-194.3-1.4zM244.8 127.7c-17.4-.3-34.5 6.9-46.9 17.3l-39.1 51.4c10.7 8.5 21.5 3.9 32.2-6.4 12.6 6.4 22.4-3.5 30.4-23.3 3.3-13.5 8.2-23 23.4-39zm-79.6 96c-.4 0-.9 0-1.3.1-3.3.7-7.2 4.2-9.8 12.2-2.7 8-3.3 19.4-.9 31.6 2.4 12.1 7.4 22.4 13 28.8 5.4 6.3 10.4 8.1 13.7 7.4 3.4-.6 7.2-4.2 9.8-12.1 2.7-8 3.4-19.5 1-31.6-2.5-12.2-7.5-22.5-13-28.8-4.8-5.6-9.2-7.6-12.5-7.6zm82.6 106.8c-7.9.1-17.8 2.6-27.5 7.3-11.1 5.5-19.8 13.1-24.5 20.1-4.7 6.9-5.1 12.1-3.6 15.2 1.5 3 5.9 5.9 14.3 6.3 8.4.5 19.7-1.8 30.8-7.3 11.1-5.5 19.8-13 24.5-20 4.7-6.9 5.1-12.2 3.6-15.2-1.5-3.1-5.9-5.9-14.3-6.3-1.1-.1-2.1-.1-3.3-.1zm-97.6 95.6c-4.7.1-9 .8-12.8 1.9-8.5 2.5-13.4 7-15 12.3-1.7 5.4 0 11.8 5.7 18.7 5.8 6.8 15.5 13.3 27.5 16.9 11.9 3.6 23.5 3.5 32.1.9 8.6-2.5 13.5-7 15.1-12.3 1.6-5.4 0-11.8-5.8-18.7-5.7-6.8-15.4-13.3-27.4-16.9-6.8-2-13.4-2.9-19.4-2.8z" />
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">
                              Deposits Requests
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className=" w-full">
                        <Link to="/transactions/requests/withdraw">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z" />
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">
                              Withdraw Requests
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className=" w-full">
                        <Link to="/transactions/auto/deposit">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g>
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path d="M5.373 4.51A9.962 9.962 0 0 1 12 2c5.523 0 10 4.477 10 10a9.954 9.954 0 0 1-1.793 5.715L17.5 12H20A8 8 0 0 0 6.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0 0 13.726 5.587l.9 1.902zm-5.213-4.662L10.586 12l-2.829 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z" />
                                </g>
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">Auto Deposits</span>
                          </div>
                        </Link>
                      </li>
                      <li className=" w-full">
                        <Link to="/transactions/manual/deposit">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M298.9 24.31c-14.9.3-25.6 3.2-32.7 8.4l-97.3 52.1-54.1 73.59c-11.4 17.6-3.3 51.6 32.3 29.8l39-51.4c49.5-42.69 150.5-23.1 102.6 62.6-23.5 49.6-12.5 73.8 17.8 84l13.8-46.4c23.9-53.8 68.5-63.5 66.7-106.9l107.2 7.7-1-112.09-194.3-1.4zM244.8 127.7c-17.4-.3-34.5 6.9-46.9 17.3l-39.1 51.4c10.7 8.5 21.5 3.9 32.2-6.4 12.6 6.4 22.4-3.5 30.4-23.3 3.3-13.5 8.2-23 23.4-39zm-79.6 96c-.4 0-.9 0-1.3.1-3.3.7-7.2 4.2-9.8 12.2-2.7 8-3.3 19.4-.9 31.6 2.4 12.1 7.4 22.4 13 28.8 5.4 6.3 10.4 8.1 13.7 7.4 3.4-.6 7.2-4.2 9.8-12.1 2.7-8 3.4-19.5 1-31.6-2.5-12.2-7.5-22.5-13-28.8-4.8-5.6-9.2-7.6-12.5-7.6zm82.6 106.8c-7.9.1-17.8 2.6-27.5 7.3-11.1 5.5-19.8 13.1-24.5 20.1-4.7 6.9-5.1 12.1-3.6 15.2 1.5 3 5.9 5.9 14.3 6.3 8.4.5 19.7-1.8 30.8-7.3 11.1-5.5 19.8-13 24.5-20 4.7-6.9 5.1-12.2 3.6-15.2-1.5-3.1-5.9-5.9-14.3-6.3-1.1-.1-2.1-.1-3.3-.1zm-97.6 95.6c-4.7.1-9 .8-12.8 1.9-8.5 2.5-13.4 7-15 12.3-1.7 5.4 0 11.8 5.7 18.7 5.8 6.8 15.5 13.3 27.5 16.9 11.9 3.6 23.5 3.5 32.1.9 8.6-2.5 13.5-7 15.1-12.3 1.6-5.4 0-11.8-5.8-18.7-5.7-6.8-15.4-13.3-27.4-16.9-6.8-2-13.4-2.9-19.4-2.8z" />
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">Manual Deposit</span>
                          </div>
                        </Link>
                      </li>
                      <li className=" w-full">
                        <Link to="/transactions/manual/withdraw">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z" />
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">Manual Withdraw</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className=" w-full">
                    <Link to="/player">
                      <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                        <div className="text-lg">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <span className="flex-1 ml-3">Players</span>
                      </div>
                    </Link>
                  </li>
                  <li className=" w-full">
                    <Link to="/admin">
                      <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                        <div className="text-lg">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 640 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z" />
                          </svg>
                        </div>
                        <span className="flex-1 ml-3">Admins</span>
                      </div>
                    </Link>
                  </li>
                  <li className=" w-full ">
                    <button
                      type="button"
                      className=" z-10 my-2 flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group hover:bg-neutral-700 "
                      onClick={() => toggleMenu("menu2")}
                    >
                      <span className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22.03 16.844l147 158.125 37.75-14.626 6.75 17.437-110.25 42.72 209.564 230.53.187.25c18.074 22.833 46.023 37.5 77.314 37.5 54.318 0 98.562-44.243 98.562-98.56 0-43.636-28.55-80.77-67.937-93.69l-132.095-73.56-56.75 23.968-7.28-17.22 43.31-18.28-.186-.094 102.624-43.28L22.03 16.843zm368.314 293.5c44.218 0 79.875 35.656 79.875 79.875 0 7.866-1.146 15.45-3.25 22.624L446.155 409l4.688-39.656-22.78 54.22 32.467 4.873c-5.74 10.555-13.776 19.644-23.467 26.625l-51-24.75 37.312-44.78-79.594-40.626 53.064 47.25-43.97 36.47 42.72 41.312c-1.736.11-3.486.156-5.25.156-44.22 0-79.875-35.657-79.875-79.875 0-1.48.045-2.95.124-4.408l30.562 11.47-6.5 25.562 27.75-34.938-49.437-17.72c6.807-26.514 26.865-47.622 52.717-55.967l24.5 35.217 51.438-5.218-41.75-8.72-17.688-24.75c2.68-.27 5.404-.406 8.157-.406z" />
                        </svg>
                      </span>
                      <span className="flex-1 ml-3 text-left">
                        Sportsbook &amp; exch
                      </span>
                      <span className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    <ul
                      className={`max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-700 space-y-2 w-full bg-neutral-800 bg-opacity-50 rounded-lg ${
                        openMenus["menu2"] ? "max-h-screen" : ""
                      }`}
                    >
                      <li className=" w-full">
                        <Link to="/sportsbook/betby">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M328.598 22.143c12.03 9.487 23.73 19.412 35.017 29.882-24.67-9.444-49.39-13.995-72.93-13.853-48.447.292-91.91 20.39-119.757 58.316-7.19-.762-14.395-1.162-21.594-1.172-45.042-.06-89.874 14.756-129.7 46.145v.003c5.198-2.437 10.294-4.65 15.294-6.656 93.608-11.524 107.275 67.72 88.455 160.04l-20.442-58.26c-1.04 48.303-8.33 96.605-27.98 144.907l.358-.164c-19.91 37.174-8.988 84.372 26.596 108.697 38.112 26.054 90.406 16.226 116.46-21.886 24.48-35.812 17.28-84.146-15.302-111.464 17.057-119.542-47.078-227.97-135.04-227.88-8.1.01-16.4.945-24.856 2.868 43.498-15.75 79.39-14.96 109.195-1.547-.018.048-.038.095-.058.143.03-.044.062-.084.092-.127 53.26 23.99 87.08 88.283 110.102 170.562-9.013 15.1-14.764 32.445-16.188 51.135-4.922 64.618 43.654 121.206 108.272 126.13 64.617 4.922 121.206-43.657 126.13-108.274 4.864-63.87-42.54-119.89-106.04-125.93-47.412-83.042-119.016-134.224-193.168-145.883 50.066-40.72 105.886-16.305 161.578 35.395-1.378 14.625 1.054 29.786 7.855 43.953 19.98 41.62 70.182 59.256 111.8 39.276 41.62-19.98 59.256-70.182 39.276-111.8-8.748-18.226-23.297-31.843-40.38-39.725l.083-.368c-43.945-22.468-88.205-38.804-133.125-42.46zM152.312 130.26l-.003.006.002-.006zm273.465-54.457c2.192-.026 4.375.065 6.543.26l-58.593 64.212 45.957 31.938-32.51 20.687c-7.997-6.06-14.726-14.063-19.383-23.765-15.608-32.516-2-71.262 30.517-86.87 8.128-3.904 16.65-5.98 25.097-6.39.792-.04 1.583-.063 2.373-.072zm27.02 5.547c13.686 6.042 25.37 16.826 32.38 31.43 3.326 6.928 5.312 14.138 6.085 21.347l-54.55-35.154 16.085-17.623zm-28.86 31.623l66.043 42.56c-4.273 18.62-16.683 35.172-35.32 44.12-15.78 7.575-33.02 8.25-48.38 3.24l47.138-29.997-51.502-35.79 22.022-24.133zM363.408 261.9c2.523 0 5.063.097 7.62.29 28.96 2.208 54.006 16.596 70.51 37.773l-14.23 57.63-68.436 11.2 22.85-57.125-53.69-43.23c10.28-3.946 21.35-6.22 32.863-6.506.836-.02 1.675-.032 2.515-.032zm-53.637 15.83l49.466 39.83-22.94 57.346-53.782 42.608c-12.663-18.067-19.373-40.483-17.56-64.264 2.442-32.068 19.823-59.336 44.816-75.52zm145.267 45.522c5.65 13.8 8.26 29.1 7.047 45.016-1.883 24.72-12.643 46.59-28.924 62.728l-17.517-52.555 26.853-4.393 12.54-50.795zm-305.443 32.44c12.53.078 25.184 3.782 36.35 11.415 1.51 1.033 2.95 2.13 4.345 3.262l-51.12 22.94-24.58-27.654c10.532-6.622 22.707-10.04 35.004-9.965zm-49.227 22.093l33.944 38.188 33.526-15.043 7.478 31.062-76.294 30.37c-18.11-21.8-20.393-53.635-3.567-78.25 1.53-2.235 3.173-4.343 4.914-6.327zm296.596 3.713l20.68 62.04c-17.592 11.508-38.992 17.51-61.633 15.786-24.032-1.83-45.366-12.054-61.364-27.58l53.3-42.224 49.017-8.022zm-193.436 3.416c14.212 21.417 14.865 50.093-.578 72.684-19.81 28.98-58.568 36.93-88.077 18.568l82.402-32.8-12.09-50.22 18.342-8.232z" />
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">Betby</span>
                          </div>
                        </Link>
                      </li>
                      <li className=" w-full">
                        <Link to="/sportsbook/jetfair">
                          <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                            <div className="text-lg">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M258.148 20.822c-1.112.008-2.226.026-3.343.055-39.32 1.041-81.507 15.972-123.785 50.404l-6.028 4.91-5.732-5.25c-12.644-11.578-20.276-27.633-25.653-43.716-8.974 36.98-14.631 81.385-9.232 114.523 18.065.908 45.409-2.177 73.7-7.818 17.858-3.561 36.048-8.126 53.064-13.072-13.419-2.911-25.896-6.882-38.143-12.082l-16.088-6.832 14.906-9.127c46.367-28.393 80.964-40.686 120.235-35.553 33.105 4.327 69.357 20.867 119.066 47.271-25.373-36.314-62.243-64.737-104.728-76.994-15.402-4.443-31.553-6.828-48.239-6.719zM346 116c-46.667 0-46.666 0-46.666 46.666V349.4c0 9.596.007 17.19.414 23.242a664.804 664.804 0 0 1 50.656-12.223c24.649-4.915 48.367-8.224 67.916-8.41 6.517-.062 12.571.224 18.041.912l6.31.793 1.358 6.213c2.464 11.265 3.673 23.447 3.914 36.059 38.032-.19 38.057-3.06 38.057-46.65V162.665C486 116 486 116 439.334 116a226.98 226.98 0 0 1 3.978 7.64l12.624 25.536-25.004-13.648c-13.085-7.143-25.164-13.632-36.452-19.528zm-281.943.016c-38.032.19-38.057 3.06-38.057 46.65V349.4C26 396 26 396 72.666 396a226.98 226.98 0 0 1-3.978-7.64l-12.624-25.536 25.004 13.649c13.085 7.142 25.164 13.632 36.452 19.527H166c46.667 0 46.666 0 46.666-46.666V162.666c0-9.626-.006-17.24-.416-23.304a664.811 664.811 0 0 1-50.654 12.22c-32.865 6.554-64.077 10.25-85.957 7.498l-6.31-.793-1.358-6.213c-2.464-11.265-3.673-23.446-3.914-36.058zm354.619 254.078c-17.543.25-40.826 3.206-64.75 7.977-17.859 3.56-36.05 8.125-53.065 13.072 13.419 2.91 25.896 6.881 38.143 12.082l16.088 6.832-14.906 9.127c-46.367 28.392-80.964 40.685-120.235 35.553-33.105-4.327-69.357-20.868-119.066-47.272 25.373 36.315 62.243 64.738 104.728 76.994 52.573 15.166 113.872 6.343 175.367-43.74l6.028-4.91 5.732 5.25c12.644 11.579 20.276 27.633 25.653 43.717 8.974-36.981 14.631-81.386 9.232-114.524-2.788-.14-5.748-.204-8.95-.158z" />
                              </svg>
                            </div>
                            <span className="flex-1 ml-3">Jetfair Exch</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className=" w-full">
                    <Link to="/settings">
                      <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                        <div className="text-lg">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span className="flex-1 ml-3">Settings</span>
                        <div className=" bg-orange-300 text-orange-800  flex justify-center items-center  px-1 ml-2 text-xs font-medium  rounded-full">
                          <p className="-mt-[0.1rem]">beta</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="grid divide-y divide-neutral-600 ">
                <li className=" w-full">
                  <Link to="/me/profile">
                    <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                      <div className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4.473 5h8.946a4.5 4.5 0 0 0-8.946 0z" />
                          </g>
                        </svg>
                      </div>
                      <span className="flex-1 ml-3">My Profile</span>
                    </div>
                  </Link>
                </li>
                <li className=" w-full">
                  <Link to="/dashboard#">
                    <div className=" w-full z-10 my-2 flex items-center p-2 text-base font-normal text-neutral-200 rounded-lg hover:bg-neutral-700 ">
                      <div className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z" />
                          <path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" />
                        </svg>
                      </div>
                      <span className="flex-1 ml-3">Log Out</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
