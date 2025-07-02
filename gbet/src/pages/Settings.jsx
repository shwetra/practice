import { Link } from "react-router-dom";

function Settings() {
  return (
    <>
      <section className="px-5 pb-8">
        <div className=" py-4">
          <div className="grid  sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-5 text-center ">
            <div className="relative bg-white shadow   rounded-lg font-bold py-3 px-5 hover:bg-white hover:shadow hover:border-white cursor-pointer ">
              <span className="capitalize"> Personal UI</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg grid gap-5">
          Fri 30 Aug 2024, 14:21:00
          <div className=" border rounded-lg">
            <p className="font-bold py-3 px-3 border-b rounded-lg bg-gray-50 capitalize">
              {" "}
              Time
            </p>
            <div className="grid sm:grid-cols-2 gap-5 px-3 py-3">
              <div>
                <div>
                  <div className="flex   flex-row items-end  justify-between gap-2">
                    <div className="flex-1">
                      <div className="">
                        <h3 className="font-semibold text-base mb-2">
                          Time Zone
                        </h3>
                        <span className=" pl-">Asia/Calcutta</span>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex-1 cursor-pointer rounded-lg ">
                        <div className="px-3 py-2 flex justify-center text-blue-600 ">
                          {" "}
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="Edit">
                              <g>
                                <path d="M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z" />
                                <path d="M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Settings;
