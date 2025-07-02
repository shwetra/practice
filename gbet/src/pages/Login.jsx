import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <article
        className=" relative min-h-screen bg-white bg-cover bg-bottom "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        }}
      >
        <div className="absolute bg-black bg-opacity-10 inset-0 z-0" />
        <div className="relative z-20 w-full max-w-lg lg:max-w-xl ml-auto h-screen px-8 py-8 lg:px-20 bg-white bg-opacity-95 shadow-none flex items-center">
          <div className="w-full">
            <div className="text-left p-0 font-sans">
              <h1 className=" text-gray-800 text-3xl font-medium mb-8">
                Sports Manager Portal
              </h1>
            </div>
            <form className="p-0">
              <div className="mt-5">
                <input
                  type="text"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="Username"
                  defaultValue=""
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                  placeholder="Password"
                  defaultValue=""
                />
              </div>
              <div className="mt-5 block md:font-sans text-base text-red-600 text-center">
                <span display="inline" className="" />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="py-3 bg-neutral-600 text-white w-full rounded hover:bg-neutral-700"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}

export default LoginPage;
