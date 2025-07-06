import { useEffect, useState } from "react";
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
          className={`h-screen overflow-auto  transition-all  duration-300 absolute inset-0 sm:static z-50 w-full sm:w-64 cursor-auto ${isSmallScreen ? "-ml-80" : ""
            }`}
        >
          <div className="transition-opacity duration-200 overflow-y-auto py-4 px-3 h-full rounded bg-neutral-900 w-full">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-20">
                <div className="flex justify-between items-center mb-5">
                  <h1 className="text-center text-2xl uppercase font-semibold text-neutral-400 ">
                    Chasma
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
                        Product
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
                      className={`max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-700 space-y-2 w-full bg-neutral-800 bg-opacity-50 rounded-lg ${openMenus["menu1"] ? "max-h-screen" : ""
                        }`}
                    >

                      <li className=" w-full">
                        <Link to="/branchs">
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
                              Add Store
                            </span>
                          </div>
                        </Link>
                      </li>



                      <li className=" w-full">
                        <Link to="/addchasma">
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
                              Add Googles
                            </span>
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
                        <span className="flex-1 ml-3">Users</span>
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
