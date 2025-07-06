import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CreateBranch() {
  const navigate = useNavigate();
  const location = useLocation();
  const editBranch = location.state?.editBranch;

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    status: "active",
  });

  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  useEffect(() => {
    if (editBranch) {
      setFormData(editBranch);
    }
  }, [editBranch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        name: value,
        slug: generateSlug(value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editBranch) {
        await axios.put(`http://localhost:8080/api/categories/${editBranch.id}`, formData);
        toast.success("Branch updated successfully!");
      } else {
        await axios.post("http://localhost:8080/api/categories", formData);
        toast.success("Branch created successfully!");
      }

      setTimeout(() => navigate("/branchs"), 1500); // delay for toast
    } catch (err) {
      console.error("Form submission failed", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="p-5 ">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <h2 className="text-xl font-bold mb-4">
        {editBranch ? "Edit Branch" : "Create Branch"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-50 p-4 rounded-md shadow mb-8"
      >
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Enter Branch Name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            readOnly
            className="w-full p-2 bg-gray-100 rounded border border-gray-300 text-gray-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          {editBranch ? "Update Branch" : "Create Branch"}
        </button>
      </form>
    </section>
  );
}

export default CreateBranch;
