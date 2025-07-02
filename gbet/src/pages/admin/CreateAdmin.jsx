import { Link } from "react-router-dom";

function CreateAdmin() {
  return (
    <>
      <section className="px-5 py-5 overflow-auto">
        <form className="relative">
          <div className="w-full grid lg:grid-cols-2 gap-6">
            <div>
              <label htmlFor="names" className="block mb-3">
                Names
              </label>
              <input
                type="text"
                id="names"
                name="names"
                placeholder="John Malik"
                className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                defaultValue=""
              />
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-3">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@hashtagsports.com"
                className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                defaultValue=""
              />
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="countryCode" className="block mb-3">
                Country Code
              </label>
              <input
                type="text"
                id="countryCode"
                name="countryCode"
                placeholder={+91}
                className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                defaultValue=""
              />
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-3">
                Phone
              </label>
              <div className=" w-full flex">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  required=""
                  placeholder="91 000 000 000"
                  className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                  defaultValue=""
                />
              </div>
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="userName" className="block mb-3">
                UserName
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                required=""
                placeholder="John_M"
                className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                defaultValue=""
              />
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-3">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required=""
                placeholder="password"
                className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                defaultValue=""
              />
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="role" className="block mb-3">
                Role
              </label>
              <select
                id="role"
                name="role"
                required=""
                className="block w-full p-2 capitalize rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              >
                <option value="">Select role</option>
                <option value="43500c11-ec76-4c23-a387-d2ddb9862cd1">
                  callingAgent
                </option>
                <option value="4a085854-a155-4558-ad63-af3ed7e333d7">
                  CUSTOMER SUPPORT
                </option>
                <option value="7b5ab3ad-a024-49c3-ac3a-9073a64d38c4">
                  finance support
                </option>
                <option value="b226df05-4e30-4f32-af7c-c28f846554e0">
                  office night{" "}
                </option>
                <option value="b507b286-2147-4495-91ba-cdd0216a17e8">
                  Sales
                </option>
                <option value="eaae7a4d-9ca2-44d9-9df2-e88bc3c15827">
                  Sub Agent
                </option>
              </select>
              <div className="text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="sharesSports" className="block mb-3">
                Sports Shares
              </label>
              <div className=" w-full flex">
                <input
                  type="number"
                  id="sharesSports"
                  name="sharesSports"
                  min={0}
                  max={100}
                  className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                  defaultValue={0}
                />
              </div>
              <div className="text-center text-red-500 mt-3" />
            </div>
            <div>
              <label htmlFor="sharesCasino" className="block mb-3">
                Casino Shares
              </label>
              <div className=" w-full flex">
                <input
                  type="number"
                  id="sharesCasino"
                  name="sharesCasino"
                  min={0}
                  max={100}
                  className="block  w-full p-2 rounded border-gray-300 border focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent undefined "
                  defaultValue={0}
                />
              </div>
              <div className="text-center text-red-500 mt-3" />
            </div>
          </div>
          <div className="flex justify-center space-x-3 h-full w-full mt-8">
            <div className="block py-2 px-5   rounded-lg w-max cursor-pointer  bg-neutral-600 text-white  hover:bg-neutral-700 ">
              Back
            </div>
            <button
              type="submit"
              className="block py-2 px-5   bg-neutral-600 text-white  hover:bg-neutral-700 rounded-lg w-max undefined"
            >
              Create Admin
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateAdmin;
