import { Link } from "react-router-dom";

function AdminList() {
  return (
    <>
      <section className="px-5 py-5 overflow-auto">
        <div className="sm:flex justify-between items-center mb-5">
          <form className="flex-1 mr-5 flex items-center gap-3 flex-wrap">
            <div className="w-full sm:max-w-xs">
              <div>
                <input
                  type="search"
                  id=":r3b:"
                  placeholder="Search"
                  className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent !m-0 "
                  defaultValue=""
                />
                <div className="text-center text-red-500 mt-3" />
              </div>
            </div>
            <div className=" min-w-[15rem] mb-3 ">
              <div className="rounded-lg  shadow-sm disabled:shadow-none undefined z-10 css-b62m3t-container">
                <span
                  id="react-select-4-live-region"
                  className="css-7pg0cj-a11yText"
                />
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  className="css-7pg0cj-a11yText"
                />
                <div className=" css-13cymwt-control">
                  <div className=" css-hlgwow">
                    <div
                      className=" css-1jqq78o-placeholder"
                      id="react-select-4-placeholder"
                    >
                      Select a Role
                    </div>
                  </div>
                  <div className=" css-1wy0on6">
                    <span className=" css-1u9des2-indicatorSeparator" />
                    <div
                      className=" css-1xc3v61-indicatorContainer"
                      aria-hidden="true"
                    >
                      <svg
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Link to="/admin/create">
            <div className="block py-2 px-5 bg-neutral-600 text-white rounded hover:bg-neutral-700 w-max">
              Create Admin
            </div>
          </Link>
        </div>
        <div className="overflow-auto relative rounded-lg">
          <table className="min-w-max w-full text-sm text-left text-gray-600 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="py-3 px-6  ">
                  names{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  username{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Role{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Status{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Parent{" "}
                </th>
                <th scope="col" className="py-3 px-6 text-center ">
                  Wallets{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Created{" "}
                </th>
                <th scope="col" className="py-3 px-6  ">
                  Veiw{" "}
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

export default AdminList;
