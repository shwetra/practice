import { Link } from "react-router-dom";

function Player() {
  return (
    <>
      <section className="px-5 py-5 overflow-auto">
        <div>
          <div>
            <div className="sm:flex justify-betwee items-center mb-5">
              <div className="flex-1 flex items-start mr-5">
                <div className="w-full lg:max-w-xs mr-3">
                  <div title="Search name, username, email, phone">
                    <input
                      type="search"
                      id=":ra:"
                      placeholder="Search..."
                      className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                      defaultValue=""
                    />
                    <div className="text-center text-red-500 mt-3" />
                  </div>
                </div>
                <div
                  title="Filters"
                  className="   bg-neutral-600 hover:bg-neutral-700    hidden sm:flex items-center  cursor-pointer h-full px-3 text-white py-2.5 rounded-lg w-max"
                >
                  <div className="text- ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M32 144h448M112 256h288M208 368h96"
                      />
                    </svg>{" "}
                  </div>
                  <p className="ml-3 text-sm"> Filters</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <Link to="/player/create">
                  <div className="block py-2 px-5 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 w-max">
                    Create Player
                  </div>
                </Link>
              </div>
              <div className="flex justify-end sm:hidden">
                <div
                  title="Filters"
                  className="   bg-neutral-600 hover:bg-neutral-700    flex items-center   mt-3 sm:mt-0  cursor-pointer h-full px-3 text-white py-2.5 rounded-lg w-max"
                >
                  <div className="text- ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M32 144h448M112 256h288M208 368h96"
                      />
                    </svg>{" "}
                  </div>
                  <p className="ml-3 text-sm"> Filters</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto relative rounded-lg">
            <table className="min-w-max w-full text-sm text-left text-gray-600 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6  ">
                    names / username
                  </th>
                  <th scope="col" className="py-3 px-6  ">
                    Parent
                  </th>
                  <th scope="col" className="py-3 px-6 text-center ">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 text-center ">
                    <div className=" flex flex-wrap justify-center gap-3">
                      <div> Wallets</div>
                      <div className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6 text-center ">
                    <div className=" flex flex-wrap justify-center gap-3">
                      <div> Registered</div>
                      <div className="text-lg">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                        </svg>
                      </div>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6  ">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 undefined">
                    <div>Kalim</div>
                    <Link to="/player/details">
                      <div>Kalim683</div>
                    </Link>
                  </td>
                  <td className="py-4 px-6 undefined">Abhishek M</td>
                  <td className="py-4 px-6 undefined">
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                        <span>active</span>
                      </div>
                      <div className="text-center mt-3" />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="cursor-pointer">
                      <div className=" bg-neutral-100  sm:flex justify-between divide-y-2 sm:divide-y-0  sm:divide-x-2 divide-neutral-300 px-5 rounded-lg py-2 flex-1">
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Cash</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Coins</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Balance</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    Wed 27 Sep 2023, 15:38:11
                  </td>
                  <td className="py-4 px-6 undefined">
                    <Link to="/player/details">
                      <div className="block text-blue-600 p-2 ">
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 undefined">
                    <div>Yammu Varak</div>
                    <Link to="/player/details">
                      <div>YammuVarak379</div>
                    </Link>
                  </td>
                  <td className="py-4 px-6 undefined">Abhishek M</td>
                  <td className="py-4 px-6 undefined">
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                        <span>active</span>
                      </div>
                      <div className="text-center mt-3" />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="cursor-pointer">
                      <div className=" bg-neutral-100  sm:flex justify-between divide-y-2 sm:divide-y-0  sm:divide-x-2 divide-neutral-300 px-5 rounded-lg py-2 flex-1">
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Cash</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Coins</h3>
                          <div className="font-semibold"> 20</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Balance</h3>
                          <div className="font-semibold"> 20</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    Fri 22 Sep 2023, 13:04:08
                  </td>
                  <td className="py-4 px-6 undefined">
                    <Link to="/player/details">
                      <div className="block text-blue-600 p-2 ">
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 undefined">
                    <div>Ravi K P</div>
                    <Link to="/player/details">
                      <div>Ravi6639</div>
                    </Link>
                  </td>
                  <td className="py-4 px-6 undefined">Abhishek M</td>
                  <td className="py-4 px-6 undefined">
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                        <span>active</span>
                      </div>
                      <div className="text-center mt-3" />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="cursor-pointer">
                      <div className=" bg-neutral-100  sm:flex justify-between divide-y-2 sm:divide-y-0  sm:divide-x-2 divide-neutral-300 px-5 rounded-lg py-2 flex-1">
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Cash</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Coins</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Balance</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    Tue 19 Sep 2023, 23:42:52
                  </td>
                  <td className="py-4 px-6 undefined">
                    <Link to="/player/details">
                      <div className="block text-blue-600 p-2 ">
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 undefined">
                    <div>Bhuvana55</div>
                    <Link to="/player/details">
                      <div>Bhuvana55</div>
                    </Link>
                  </td>
                  <td className="py-4 px-6 undefined">Abhishek M</td>
                  <td className="py-4 px-6 undefined">
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                        <span>active</span>
                      </div>
                      <div className="text-center mt-3">125.63.120.254</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="cursor-pointer">
                      <div className=" bg-neutral-100  sm:flex justify-between divide-y-2 sm:divide-y-0  sm:divide-x-2 divide-neutral-300 px-5 rounded-lg py-2 flex-1">
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Cash</h3>
                          <div className="font-semibold"> 0.28</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Coins</h3>
                          <div className="font-semibold"> 0</div>
                        </div>
                        <div className="py-2 sm:py-0 px-2 flex-1">
                          <h3 className="uppercase text-xs mr-2"> Balance</h3>
                          <div className="font-semibold"> 0.28</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    Sat 16 Sep 2023, 14:57:10
                  </td>
                  <td className="py-4 px-6 undefined">
                    <Link to="/player/details">
                      <div className="block text-blue-600 p-2 ">
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav className="mt-5 flex justify-between items-center">
            <div>Total: 4 </div>
            <ul className="flex flex-wrap justify-center items-center -space-x-px">
              <li className="block py-2 px-3 text-xl ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Previous</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="text-white bg-neutral-800 py-2 px-3 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                1
              </li>
              <li className="block py-2 px-3 text-xl leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Next</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            </ul>
            <div>
              <div>
                <div className=" w-full flex">
                  <input
                    type="number"
                    id="pageSize"
                    name="pageSize"
                    min={0}
                    max={100}
                    className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent w-20 text-center "
                    defaultValue={10}
                  />
                </div>
                <div className="text-center text-red-500 mt-3" />
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Player;
