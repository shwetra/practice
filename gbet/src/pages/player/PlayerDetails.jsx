import { Link } from "react-router-dom";
import React, { useState } from "react";
function PlayerDetails() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <section className="px-5 py-5 overflow-auto relative">
        <div className="mb-8">
          <div className="grid  sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-5 text-center ">
            <button
              className={`relative rounded-lg font-bold py-3 px-5 hover:bg-white hover:shadow hover:border-white cursor-pointer ${
                activeTab === "tab1"
                  ? "active bg-white shadow"
                  : "border-2 border-dashed"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              <span className="capitalize"> Profile</span>
            </button>
            <button
              className={`relative rounded-lg font-bold py-3 px-5 hover:bg-white hover:shadow hover:border-white cursor-pointer ${
                activeTab === "tab2"
                  ? "active bg-white shadow"
                  : "border-2 border-dashed"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              <span className="capitalize"> Stats</span>
            </button>
            <button
              className={`relative rounded-lg font-bold py-3 px-5 hover:bg-white hover:shadow hover:border-white cursor-pointer ${
                activeTab === "tab3"
                  ? "active bg-white shadow"
                  : "border-2 border-dashed"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              <span className="capitalize"> Account Statement</span>
            </button>
            <button
              className={`relative rounded-lg font-bold py-3 px-5 hover:bg-white hover:shadow hover:border-white cursor-pointer ${
                activeTab === "tab4"
                  ? "active bg-white shadow"
                  : "border-2 border-dashed"
              }`}
              onClick={() => setActiveTab("tab4")}
            >
              <span className="capitalize"> Banking</span>
            </button>
          </div>
        </div>
        <div className="tab-content">
          <div
            id="tab1"
            className={`tab-panel ${activeTab === "tab1" ? "" : "hidden"}`}
          >
            <div className="grid gap-5 ">
              <form className="grid sm:grid-cols-2 gap-2 rounded-lg bg-white overflow-hidden">
                <div className="px-5 py-5 grid gap-4 border-r">
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Names</h3>
                    <span className=" pl-">Kalim</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Username</h3>
                    <span className=" pl-">Kalim683</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Status</h3>
                    <span className=" pl-">active</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">IP Address</h3>
                    <span className=" pl-" />
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">
                      Sports LC %
                    </h3>
                    <span className=" pl-">5</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">
                      Casino LC %
                    </h3>
                    <span className=" pl-">5</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Parent</h3>
                    <span className=" pl-">Abhishek M</span>
                  </div>
                </div>
                <div className="px-5 py-5 grid gap-4">
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Email</h3>
                    <span className=" pl-">Kalim683@gmail.com</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">
                      Country Code
                    </h3>
                    <span className=" pl-">91</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Phone</h3>
                    <span className=" pl-">9845283683</span>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Password</h3>
                    <span className=" pl-" />
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">
                      Confirm Password
                    </h3>
                    <span className=" pl-" />
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-base mb-2">Created</h3>
                    <span className=" pl-">Wed 27 Sep 2023, 15:38:11</span>
                  </div>
                </div>
                <div className="col-span-full flex items-center justify-center font-bold bg-neutral-200 ">
                  <div className="px-5 py-3 flex items-center text-blue-800 cursor-pointer">
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
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                    <div className="ml-3 "> Update</div>
                  </div>
                </div>
              </form>
              <div className="rounded-lg bg-white p-5">
                <h3 className="font-semibold text-lg mb-5">
                  Player Quick Actions
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="">
                    <div className="block py-2 px-5   rounded-lg w-max cursor-pointer  bg-neutral-600 text-white  hover:bg-neutral-700 ">
                      Temporary Logout
                    </div>
                    <p className="text-neutral-500 text-xs mt-2">
                      This will temporary logout the user but they can login
                      again
                    </p>
                  </div>
                  <div className="">
                    <div className="block py-2 px-5   rounded-lg w-max cursor-pointer bg-red-500 text-white">
                      Block Player
                    </div>
                    <p className="text-neutral-500 text-xs mt-2">
                      This will block the player and they login will not be
                      possible unless you unblock them
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tab2"
            className={`tab-panel ${activeTab === "tab2" ? "" : "hidden"}`}
          >
            <div>
              <div className="flex items-center justify-end">
                <div className="pb-3">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="h-full bg-white rounded-lg shadow-sm">
                  <div className="h-full py-2 px-2   ">
                    <div className="bg-white rounded-lg py-3 mb-0.5">
                      <h2 className=" px-3 text-neutral-500 text-sm font-semibold uppercase flex justify-between mb-2">
                        Balance
                      </h2>
                      <div className="flex justify-between overflow-hidden">
                        {" "}
                        <div className="relative flex-1 group ">
                          <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                            <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                              0{" "}
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
                              Cash Balance
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              COins Balance
                            </h3>{" "}
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
                        {" "}
                        <div className="relative flex-1 group ">
                          <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                            <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                              0{" "}
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
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Sports
                            </h3>{" "}
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
                        Losing Comission
                      </h2>
                      <div className="flex justify-between overflow-hidden">
                        {" "}
                        <div className="relative flex-1 group ">
                          <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                            <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                              0{" "}
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
                              PNL
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Losing Comission
                            </h3>{" "}
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
                        {" "}
                        <div className="relative flex-1 group ">
                          <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                            <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                              0{" "}
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
                              Auto Cash
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Manual Cash
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Manual Requests
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Coins
                            </h3>{" "}
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
                        {" "}
                        <div className="relative flex-1 group ">
                          <div className="text-gray-900 text-4xl font-semibold px-3 break-all mb-1 ">
                            <div className=" static group-hover:absolute opacity-100 group-hover:opacity-0">
                              0{" "}
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
                              Auto Cash
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Manual Cash
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Manual Requests
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                        <li className=" flex  items-center flex-wrap gap-2 p-2 border-t-2 border-neutral-100 mb-0.5 bg-white text-gray-900 text-base font-medium">
                          <div className="w-32 border-r-2 border-gray-300 ">
                            <h3 className="uppercase text-xs text-neutral-600 ">
                              Coins
                            </h3>{" "}
                          </div>
                          <p className="">0</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tab3"
            className={`tab-panel ${activeTab === "tab3" ? "" : "hidden"}`}
          >
            <div className="">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-5">
                <div className="">
                  <ul className="rounded-lg bg-white flex justify-center text-left">
                    <li className="px-5 py-2">
                      Total Debit:
                      <span className="ml-3 font-semibold text-lg text-red-600">
                        0
                      </span>
                    </li>
                    <li className="px-5 py-2">
                      Total Credit:
                      <span className="ml-3 font-semibold text-lg text-green-600">
                        0
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="sm:flex sm:justify-end items-start gap-2">
                  <div>
                    <div>
                      <select
                        id=":r15:"
                        className="block min-w-[8rem] w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  font-bold ring-0 border-0 shadow-sm py-2.5 focus:border-0 focus:shadow-none focus:ring-0 rounded-lg "
                      >
                        <option value="Full">Full</option>
                        <option value="ManualDeposit">Manual Deposit</option>
                        <option value="ManualDepositCash">
                          Manual Cash Deposit
                        </option>
                        <option value="ManualDepositCoins">
                          Manual Coin Deposit
                        </option>
                        <option value="ManualWithdraw">Manual Withdraw</option>
                        <option value="ManualWithdrawCash">
                          Manual Cash Withdraw
                        </option>
                        <option value="ManualWithdrawCoins">
                          Manual Coin Withdraw
                        </option>
                        <option value="CasinoWin">Casino Credit</option>
                        <option value="CasinoLoss">Casino Debit</option>
                        <option value="SportWin">Sport Credit</option>
                        <option value="SportLoss">Sport Debit</option>
                        <option value="OtherDebit">Other Debit</option>
                        <option value="OtherCredit">Other Credit</option>
                        <option value="OnlineDeposit">Online Deposit</option>
                        <option value="OnlineWithdraw">Auto Withdraw</option>
                        <option value="Lccredit">LC Credit</option>
                        <option value="BonusCredit">Bonus Credit</option>
                      </select>
                      <div className="text-center text-red-500 mt-3" />
                    </div>
                  </div>
                  <div className="flex justify-end sm:block mb-5 sm:mb-0 mr-3">
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
                        <option value="alltime" className="font-semibold">
                          All Time{" "}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end sm:block" />
                </div>
              </div>
              <div className="overflow-auto relative rounded-lg">
                <table className="min-w-max w-full text-sm text-left text-gray-600 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="py-3 px-6  ">
                        narration{" "}
                      </th>
                      <th scope="col" className="py-3 px-6 text-center ">
                        Debit{" "}
                      </th>
                      <th scope="col" className="py-3 px-6 text-center ">
                        Credit{" "}
                      </th>
                      <th scope="col" className="py-3 px-6 text-center ">
                        balance{" "}
                      </th>
                      <th scope="col" className="py-3 px-6 text-center ">
                        <div className="flex flex-wrap">
                          <div className="flex-1"> Date</div>
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
            </div>
          </div>
          <div
            id="tab4"
            className={`tab-panel ${activeTab === "tab4" ? "" : "hidden"}`}
          >
            <div className="bg-white rounded-lg p-5">
              <form className="relative">
                <div className="w-full grid lg:grid-cols-2 gap-6">
                  <div className="col-span-full flex flex-wrap justify-between gap-5 ">
                    <h4 className="text-">Kalim683</h4>
                    <div className="flex ">
                      <div className="text-sm mr-3">WithDraw</div>
                      <label
                        htmlFor=":r17:"
                        className="inline-flex relative items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          id=":r17:"
                          className="sr-only peer"
                          defaultValue="true"
                          defaultChecked=""
                        />
                        <div className="w-11 h-6 bg-blue-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                      </label>
                      <div className="text-sm ml-3">Deposit</div>
                    </div>
                  </div>
                  <div className="col-span-full">
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
                  <div className="col-span-full grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cashable" className="block mb-3">
                        Cash
                      </label>
                      <input
                        type="text"
                        id="cashable"
                        name="cashable"
                        required=""
                        className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                        defaultValue={0}
                      />
                      <div className="text-center text-red-500 mt-3" />
                    </div>
                    <div>
                      <label htmlFor="nonCashable" className="block mb-3">
                        Coins
                      </label>
                      <input
                        type="text"
                        id="nonCashable"
                        name="nonCashable"
                        className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                        defaultValue={0}
                      />
                      <div className="text-center text-red-500 mt-3" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-3 h-full w-full mt-8">
                  <button
                    type="button"
                    className="block py-2 px-5   bg-neutral-600 text-white  hover:bg-neutral-700 rounded-lg w-max "
                  >
                    + Add Remarks
                  </button>{" "}
                  <button
                    type="submit"
                    className="block py-2 px-5   bg-neutral-600 text-white  hover:bg-neutral-700 rounded-lg w-max undefined"
                  >
                    Deposit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlayerDetails;
