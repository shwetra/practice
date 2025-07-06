// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { FiMoreVertical } from "react-icons/fi";

// const AddProducts = () => {
//   const [menuOpenIndex, setMenuOpenIndex] = useState(null);
//   const menuRef = useRef(null);
//   const navigate = useNavigate();

//   // Close dropdown when clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpenIndex(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);



//   const handleDelete = (id) => {
//     alert(`Delete clicked for ID: ${id}`);
//   };

//   const rows = [
//     {
//       id: 1,
//       username: "Bhuvana55",
//       utr: "420618145182",
//       mode: "manual",
//       amount: "10,000",
//       status: "approved",
//       created: "Wed 24 Jul 2024, 18:40:45",
//     },
//     {
//       id: 2,
//       username: "Bhuvana55",
//       utr: "420617133801",
//       mode: "manual",
//       amount: "1,000",
//       status: "approved",
//       created: "Wed 24 Jul 2024, 17:29:25",
//     },
//   ];

//   return (
//     <section className="px-5 py-5 overflow-auto">
//       {/* 🔘 Add New Button */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Product List</h2>
//         <button
//           onClick={() => navigate("/addchasma/create")}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
//         >
//           + Add New
//         </button>
//       </div>

//       <div className="overflow-auto relative rounded-lg">
//         <table className="min-w-max w-full text-sm text-left text-gray-600">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//             <tr>
//               <th className="py-3 px-6">Username</th>
//               <th className="py-3 px-6">UTR / TXN Code</th>
//               <th className="py-3 px-6">PayIn Mode</th>
//               <th className="py-3 px-6">Amount</th>
//               <th className="py-3 px-6">Status</th>
//               <th className="py-3 px-6 text-center">Created</th>
//               <th className="py-3 px-6 text-right">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((item, index) => (
//               <tr className="bg-white border-b" key={item.id}>
//                 <td className="py-4 px-6">
//                   <Link to={`/player/${item.id}`}>{item.username}</Link>
//                 </td>
//                 <td className="py-4 px-6">{item.utr}</td>
//                 <td className="py-4 px-6">{item.mode}</td>
//                 <td className="py-4 px-6">{item.amount}</td>
//                 <td className="py-4 px-6">
//                   <div className="bg-green-200 text-green-800 px-3 py-1 text-xs font-semibold rounded-xl max-w-max uppercase">
//                     {item.status}
//                   </div>
//                 </td>
//                 <td className="py-4 px-6 text-center">{item.created}</td>
//                 <td className="py-4 px-6 text-right relative" ref={menuRef}>
//                   <button
//                     onClick={() =>
//                       setMenuOpenIndex(menuOpenIndex === index ? null : index)
//                     }
//                     className="p-1 rounded hover:bg-gray-200"
//                   >
//                     <FiMoreVertical size={18} />
//                   </button>

//                   {menuOpenIndex === index && (
//                     <div className="absolute z-20 right-0 mt-2 bg-white border shadow rounded w-28">
//                    <Link to={`/addchasma/edit/${item.id}`}>   <button
                        
//                         className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                       >
//                         Edit
//                       </button>
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(item.id)}
//                         className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default AddProducts;



import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";

const AddProducts = () => {
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [products, setProducts] = useState([]);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/product/all");
        setProducts(res.data.data);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:8080/api/product/${id}`);
        setProducts(products.filter((product) => product.id !== id));
        alert("✅ Product deleted successfully");
      } catch (err) {
        console.error("❌ Error deleting product:", err);
      }
    }
  };

  return (
    <section className="px-5 py-5 overflow-auto">
      {/* 🔘 Add New Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Product List</h2>
        <button
          onClick={() => navigate("/addchasma/create")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          + Add New
        </button>
      </div>

      <div className="overflow-auto relative rounded-lg">
        <table className="min-w-max w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Model No</th>
              <th className="py-3 px-6">Frame Shape</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6 text-center">Created At</th>
              <th className="py-3 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <tr className="bg-white border-b" key={item.id}>
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6">{item.modelNo}</td>
                  <td className="py-4 px-6">{item.frameShape}</td>
                  <td className="py-4 px-6">₹{item.price}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-xl uppercase ${
                        item.status === "active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right relative" ref={menuRef}>
                    <button
                      onClick={() =>
                        setMenuOpenIndex(menuOpenIndex === index ? null : index)
                      }
                      className="p-1 rounded hover:bg-gray-200"
                    >
                      <FiMoreVertical size={18} />
                    </button>

                    {menuOpenIndex === index && (
                      <div className="absolute z-20 right-0 mt-2 bg-white border shadow rounded w-28">
                        <Link to={`/addchasma/edit/${item.id}`}>
                          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-6 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
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
  );
};

export default AddProducts;
