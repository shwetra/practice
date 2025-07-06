import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function BranchManager() {
  const navigate = useNavigate();
  const [branches, setBranches] = useState([]);
  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const dropdownRef = useRef(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const fetchBranches = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/categories");
      setBranches(res.data.data || []);
    } catch (err) {
      console.error("Error fetching branches", err);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/${id}`);
      fetchBranches();
      setMenuOpenIndex(null);
      toast("Deleted Successfully");
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleEdit = (branch) => {
    navigate("/create-branch", { state: { editBranch: branch } });
  };

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = branches.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(branches.length / rowsPerPage);

  return (
    <section className="p-5">
      <ToastContainer/>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Branch List</h2>
        <button
          onClick={() => navigate("/create-branch")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
        >
          Add New Branch
        </button>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="text-xs uppercase bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((branch, index) => (
              <tr key={branch._id} className="border-b relative">
                <td className="py-2 px-4">{branch.name}</td>
                <td className="py-2 px-4">{branch.slug}</td>
                <td className="py-2 px-4 capitalize">{branch.status}</td>
                <td className="py-2 px-4 text-right">
                  <div className="relative" ref={menuOpenIndex === index ? dropdownRef : null}>
                    <button
                      onClick={() =>
                        setMenuOpenIndex((prev) => (prev === index ? null : index))
                      }
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <FiMoreVertical size={18} />
                    </button>
                    {menuOpenIndex === index && (
                      <div className="absolute z-10 bg-white shadow-md border rounded right-0 mt-2 w-28">
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleEdit(branch)}
                        >
                          Edit
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                          onClick={() => handleDelete(branch.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {currentRows.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No branches found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default BranchManager;
