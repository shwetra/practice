import { Link } from "react-router-dom";

function DepositRequest() {
  return (
    <>
      <section className="px-5 py-5 overflow-auto">
        <div className=" ">
          <div className="mb-3 flex justify-center gap-3 ">
            <div className="block py-2 px-5   rounded-lg w-max cursor-pointer  bg-neutral-600 text-white  hover:bg-neutral-700 ">
              Show Filters
            </div>
          </div>
        </div>
        <div className="overflow-auto relative rounded-lg">
          <table className="min-w-max w-full text-sm text-left text-gray-600 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="py-3 px-6  ">
                  Username
                </th>
                <th scope="col" className="py-3 px-6  ">
                  UTR / TXN Code
                </th>
                <th scope="col" className="py-3 px-6  ">
                  PayIn Mode
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Amount
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Status
                </th>
                <th scope="col" className="py-3 px-6 text-center ">
                  <div className="flex flex-wrap justify-center gap-3">
                    <div> Created</div>
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">420618145182 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">10,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Wed 24 Jul 2024, 18:40:45
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">420617133801 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">1,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Wed 24 Jul 2024, 17:29:25
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">420616126912 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">4,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Wed 24 Jul 2024, 16:46:33
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">420016123123 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">5,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Thu 18 Jul 2024, 16:05:22
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">420012189569 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">9,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Thu 18 Jul 2024, 12:36:03
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">418421564602 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">46,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Tue 02 Jul 2024, 21:50:30
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">418421480506 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">87,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Tue 02 Jul 2024, 21:14:32
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">418419164074 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">50,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Tue 02 Jul 2024, 19:16:39
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">418418151604 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">13,000 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Tue 02 Jul 2024, 18:18:15
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 undefined">
                  <Link to="/player/728739">
                    <div>Bhuvana55</div>
                  </Link>
                </td>
                <td className="py-4 px-6 undefined">418417142819 </td>
                <td className="py-4 px-6 undefined">manual </td>
                <td className="py-4 px-6 undefined">6,326 </td>
                <td className="py-4 px-6 undefined">
                  <div className="bg-green-200 text-green-800  px-3 py-1 uppercase text-xs font-semibold rounded-xl max-w-max ">
                    <span>approved</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">
                  Tue 02 Jul 2024, 17:38:14
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav className="mt-5 flex justify-between items-center">
          <div>
            Total: {/* */}73{/* */}
          </div>
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
            <li className="text-neutral-600 bg-white py-2 px-3 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
              2
            </li>
            <li className="text-neutral-600 bg-white py-2 px-3 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
              3
            </li>
            <li className="text-neutral-600 bg-white py-2 px-3 leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
              4
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
      </section>
    </>
  );
}

export default DepositRequest;
