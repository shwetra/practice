import { Link } from "react-router-dom";

function ManualWithdraw() {
  return (
    <>
      <section className="px-5 py-5 overflow-auto">
        <div className="mb-8 flex flex-wrap gap-3 items-center justify-between">
          <div>
            <input
              type="text"
              id="q"
              name="q"
              placeholder="Username"
              className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent min-w-[15rem] "
              defaultValue=""
            />
            <div className="text-center text-red-500 mt-3" />
          </div>
          <div />
          <div className="flex items-center justify-end gap-3">
            <div className="flex  sm:flex-row items-center">
              <select
                id="status"
                name="status"
                className="block  px-2 py-2.5 font-bold shadow-sm  rounded-lg  focus:outline-none   "
              >
                <option value="today" className="font-semibold">
                  Today{" "}
                </option>
                <option value="yesterday" className="font-semibold">
                  Yesterday{" "}
                </option>
                <option value="lastweek" className="font-semibold">
                  Last Week{" "}
                </option>
                <option value="past7days" className="font-semibold">
                  Past 7 Days{" "}
                </option>
                <option value="past30days" className="font-semibold">
                  Past 30 Days{" "}
                </option>
                <option value="lastmonth" className="font-semibold">
                  Last Month{" "}
                </option>
                <option value="custom" className="font-semibold">
                  Custom{" "}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-auto relative rounded-lg">
          <table className="min-w-max w-full text-sm text-left text-gray-600 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="py-3 px-6  ">
                  Player{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  TXN By{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Cash{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Coins{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Amount{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Date{" "}
                </th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
        <nav className="mt-5 flex justify-between items-center">
          <div>Total: 0 </div>
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

export default ManualWithdraw;
