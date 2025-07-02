import $ from "jquery";
import { useLocation } from "react-router-dom";
function Header() {
  const showSidenav = () => {
    $("aside").toggleClass("-ml-80");
  };

  const location = useLocation();
  const isLogin = ["/"].includes(location.pathname);
  return (
    <>
      <header
        className={
          isLogin
            ? "hidden"
            : "bg-white flex items-center justify-between py-3 px-8"
        }
      >
        <div className="flex items-center">
          <button
            onClick={showSidenav}
            className=" mr-3 cursor-pointer text-3xl"
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
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </button>
          <div className="text-lg sm:text-2xl uppercase font-semibold">
            Dashboard
          </div>
        </div>
        <div className="relative flex items-center space-x-4 ">
          <div className="hidden pointer-events-none sm:block absolute top-10 right-0 shadow-lg rounded-lg z-20 sm:static sm:shadow-none sm:z-0  text-center">
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
          <div />
          <div className="h-8 w-8 rounded-full bg-gray-500 flex justify-center items-center uppercase text-gray-200">
            A
          </div>
          <div className="hidden sm:block">
            <div className="">Abhishek77</div>
            <div className="text-sm">
              <span className="capitalize">Agent</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
