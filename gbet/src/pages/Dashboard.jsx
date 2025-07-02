function Dashboard() {
  return (
    <>
      <section className="px-5 py-5">
        <div className="mb-8 flex flex-col items-end gap-5 sm:flex-row sm:justify-end sm:items-center">
          <div className="flex  sm:flex-row items-center">
            <select
              id="status"
              name="status"
              className="block  px-2 py-2.5 font-bold shadow-sm  rounded-lg  focus:outline-none   "
            >
              <option value="today" className="font-semibold">
                Today
              </option>
              <option value="yesterday" className="font-semibold">
                Yesterday
              </option>
              <option value="lastweek" className="font-semibold">
                Last Week
              </option>
              <option value="past7days" className="font-semibold">
                Past 7 Days
              </option>
              <option value="past30days" className="font-semibold">
                Past 30 Days
              </option>
              <option value="lastmonth" className="font-semibold">
                Last Month
              </option>
              <option value="custom" className="font-semibold">
                Custom
              </option>
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  Current Cashable Balance
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group cursor-pointer bg-white rounded-b-md  rounded-l-md  ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0.28
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0.28
                      </div>
                    </div>
                  </div>
                  <ul className="" />
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Coins Balance
                      </h3>
                    </div>
                    <p className="">20</p>
                  </li>
                  <li className="cursor-pointer flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Sports Exposure
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  GGR
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="" />
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className="cursor-pointer flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Casino
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Sports
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Sports (Book/Exch)
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  Player Sports Exposure
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group cursor-pointer bg-white rounded-b-md  rounded-l-md  ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="" />
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Match Odds GGR
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        BookMaker GGR
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Fancy GGR
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  Players
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group cursor-pointer bg-white rounded-b-md  rounded-l-md  ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        4
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        4
                      </div>
                    </div>
                  </div>
                  <ul className="" />
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        New
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        unique
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] ">TOTAL</h3> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] ">NEW</h3> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className="cursor-pointer flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Inactive
                      </h3>
                    </div>
                    <p className="">4</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Blocked
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  Deposits
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="">
                    <li className=" group flex items-center text-xs justify-end  text-right border-r- border-gray-300  bg-white text-gray-900  font-medium">
                      <div className="relative transition-opacity">
                        <div className=" text-neutral-600 static group-hover:absolute opacity-100 group-hover:opacity-0">
                          0
                        </div>
                        <div className="absolute group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                          0
                        </div>
                      </div>
                      <div className="pl-1 ">
                        <h3 className="uppercase text-neutral-300 ">Auto Me</h3>
                      </div>
                    </li>
                    <li className=" group flex items-center text-xs justify-end  text-right border-r- border-gray-300  bg-white text-gray-900  font-medium">
                      <div className="relative transition-opacity">
                        <div className=" text-neutral-600 static group-hover:absolute opacity-100 group-hover:opacity-0">
                          0
                        </div>
                        <div className="absolute group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                          0
                        </div>
                      </div>
                      <div className="pl-1 ">
                        <h3 className="uppercase text-neutral-300 ">
                          Manual Me
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Auto Cash
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Manual Cash
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Cash Requests
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Coins
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  Withdraws
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="">
                    <li className=" group flex items-center text-xs justify-end  text-right border-r- border-gray-300  bg-white text-gray-900  font-medium">
                      <div className="relative transition-opacity">
                        <div className=" text-neutral-600 static group-hover:absolute opacity-100 group-hover:opacity-0">
                          0
                        </div>
                        <div className="absolute group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                          0
                        </div>
                      </div>
                      <div className="pl-1 ">
                        <h3 className="uppercase text-neutral-300 ">Auto Me</h3>
                      </div>
                    </li>
                    <li className=" group flex items-center text-xs justify-end  text-right border-r- border-gray-300  bg-white text-gray-900  font-medium">
                      <div className="relative transition-opacity">
                        <div className=" text-neutral-600 static group-hover:absolute opacity-100 group-hover:opacity-0">
                          0
                        </div>
                        <div className="absolute group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                          0
                        </div>
                      </div>
                      <div className="pl-1 ">
                        <h3 className="uppercase text-neutral-300 ">
                          Manual Me
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Auto Cash
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Manual Cash
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Cash Requests
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Coins
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  New Player Deposits
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="">
                    <li className=" group flex items-center text-xs justify-end  text-right border-r- border-gray-300  bg-white text-gray-900  font-medium">
                      <div className="relative transition-opacity">
                        <div className=" text-neutral-600 static group-hover:absolute opacity-100 group-hover:opacity-0">
                          0
                        </div>
                        <div className="absolute group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                          0
                        </div>
                      </div>
                      <div className="pl-1 ">
                        <h3 className="uppercase text-neutral-300 ">
                          Total Players
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Auto Cash
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] ">players</h3> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] ">amount</h3> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Manual Cash
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Cash Requests
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Coins
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  New Player Withdraws
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="">
                    <li className=" group flex items-center text-xs justify-end  text-right border-r- border-gray-300  bg-white text-gray-900  font-medium">
                      <div className="relative transition-opacity">
                        <div className=" text-neutral-600 static group-hover:absolute opacity-100 group-hover:opacity-0">
                          0
                        </div>
                        <div className="absolute group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                          0
                        </div>
                      </div>
                      <div className="pl-1 ">
                        <h3 className="uppercase text-neutral-300 ">
                          Total Players
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Auto Cash
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] ">players</h3> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] ">amount</h3> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Manual Cash
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Cash Requests
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                    </div>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Coins
                      </h3>
                    </div>
                    <div className="flex flex-1 divide-x gap-3">
                      <div className="flex-1 flex items-end justify-between ">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between pl-2">
                        <h3 className="text-[0.5rem] " /> <p>0</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  Agents
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="" />
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        New Agents
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        New Players
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Total Players
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-full bg-white rounded-lg shadow-sm">
            <div className="h-full py-2 px-2   ">
              <div className="bg-white rounded-lg py-3 mb-0.5">
                <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                  NGR
                </h2>
                <div className="flex justify-between overflow-hidden">
                  <div className="relative flex-1 group ">
                    <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                      <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                        0
                      </div>
                      <div className="absolute w-full group-hover:static top-0 opacity-0 group-hover:opacity-100 bg-white">
                        0
                      </div>
                    </div>
                  </div>
                  <ul className="" />
                </div>
              </div>
              <div className="border-">
                <ul className="">
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Casino
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                  <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                    <div className="w-32 border-r-2 border-gray-300 ">
                      <h3 className="uppercase text-xs text-neutral-600 ">
                        Sports
                      </h3>
                    </div>
                    <p className="">0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
