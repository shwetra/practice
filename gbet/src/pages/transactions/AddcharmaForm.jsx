// import axios from 'axios';
// import { useState } from 'react';

// const AddcharmaForm = () => {
//   const [formData, setFormData] = useState({
//     brandName: "",
//     name: "",
//     productType: "",
//     frameType: "",
//     frameShape: "",
//     countryOfOrigin: "",
//     modelNo: "",
//     frameSize: "",
//     frameWidth: "",
//     frameDimensions: "",
//     suitedFor: "",
//     frameColor: "",
//     weight: "",
//     weightGroup: "",
//     material: "",
//     frameMaterial: "",
//     templeMaterial: "",
//     prescriptionType: "",
//     frameStyle: "",
//     frameStyleSecondary: "",
//     collection: "",
//     productWarranty: "",
//     gender: "",
//     height: "",
//     condition: "",
//     templeColor: "",
//     price: "",
//     discountPrice: "",
//     branch: "",
//     productCount: 0,
//     status: "active",
//     starts: 3,
//     images: [], // files
//     tryonImage: null, // single file
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       images: Array.from(e.target.files)
//     }));
//   };

//   const handleTryonChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       tryonImage: e.target.files[0]
//     }));
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault(); // ✅ Prevent page reload on form submission

//   const formDataToSend = new FormData();

//   for (const key in formData) {
//     if (key === "images") {
//       formData.images.forEach((imgFile) => {
//         formDataToSend.append("images", imgFile);
//       });
//     } else if (key === "tryonImage") {
//       formDataToSend.append("tryonImage", formData.tryonImage);
//     } else {
//       formDataToSend.append(key, formData[key]);
//     }
//   }

//   try {
//     const res = await axios.post("http://localhost:8080/api/product", formDataToSend, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     console.log("✅ Success:", res.data);
//   } catch (err) {
//     console.error("❌ Upload failed:", err);
//   }
// };



//   return (
//     <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//       {[
//         "brandName", "name", "productType", "frameType", "frameShape",
//         "countryOfOrigin", "modelNo", "frameSize", "frameWidth", "frameDimensions",
//         "suitedFor", "frameColor", "weight", "weightGroup", "material",
//         "frameMaterial", "templeMaterial", "prescriptionType", "frameStyle", "frameStyleSecondary",
//         "collection", "productWarranty", "gender", "height", "condition",
//         "templeColor", "price", "discountPrice", "branch", "productCount", "starts"
//       ].map(field => (
//         <div key={field} className="col-span-1">
//           <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
//           <input
//             type={["price", "discountPrice", "productCount", "starts"].includes(field) ? "number" : "text"}
//             name={field}
//             value={formData[field]}
//             onChange={handleChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>
//       ))}

//       {/* Status */}
//       <div className="col-span-1">
//         <label className="block text-sm font-medium text-gray-700">Status</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         >
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>

//       {/* Images Upload */}
//       <div className="col-span-1">
//         <label className="block text-sm font-medium text-gray-700">Product Images</label>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mt-1 block w-full text-sm text-gray-500"
//         />
//         <p className="text-xs text-gray-400 mt-1">You can upload multiple images</p>
//       </div>

//       {/* Try-On Image Upload */}
//       <div className="col-span-1">
//         <label className="block text-sm font-medium text-gray-700">Try-On Image</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleTryonChange}
//           className="mt-1 block w-full text-sm text-gray-500"
//         />
//       </div>

//       <div className="col-span-full">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddcharmaForm;



import axios from 'axios';
import { useEffect, useState } from 'react';

const AddcharmaForm = () => {
  const [branches, setBranches] = useState([]);
  const [formData, setFormData] = useState({
    brandName: "",
    name: "",
    productType: "",
    frameType: "",
    frameShape: "",
    countryOfOrigin: "",
    modelNo: "",
    frameSize: "",
    frameWidth: "",
    frameDimensions: "",
    suitedFor: "",
    frameColor: "",
    weight: "",
    weightGroup: "",
    material: "",
    frameMaterial: "",
    templeMaterial: "",
    prescriptionType: "",
    frameStyle: "",
    frameStyleSecondary: "",
    collection: "",
    productWarranty: "",
    gender: "",
    height: "",
    condition: "",
    templeColor: "",
    price: "",
    discountPrice: "",
    branch: "",
    productCount: 1,
    status: "active",
    starts: 3,
    images: [],
    tryonImage: null,
  });

  const starOptions = [
    1, 2, 3, 3.5, 3.7, 4, 4.2, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5
  ];

  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
      .then(res => {
        setBranches(res.data.data || []);
      })
      .catch(err => {
        console.error("Failed to fetch branches", err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      images: Array.from(e.target.files)
    }));
  };

  const handleTryonChange = (e) => {
    setFormData(prev => ({
      ...prev,
      tryonImage: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "images") {
        formData.images.forEach(imgFile => {
          formDataToSend.append("images", imgFile);
        });
      } else if (key === "tryonImage") {
        formDataToSend.append("tryonImage", formData.tryonImage);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const res = await axios.post("http://localhost:8080/api/product", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("✅ Success:", res.data);
    } catch (err) {
      console.error("❌ Upload failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        "brandName", "name", "productType", "frameType",
        "countryOfOrigin", "modelNo", "frameSize", "frameWidth", "frameDimensions",
        "suitedFor", "frameColor", "weight", "weightGroup", "material",
        "frameMaterial", "templeMaterial", "prescriptionType", "frameStyle", "frameStyleSecondary",
        "collection", "productWarranty", "gender", "height", "condition",
        "templeColor", "price", "discountPrice", "productCount"
      ].map(field => (
        <div key={field} className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
          <input
            type={["price", "discountPrice", "productCount"].includes(field) ? "number" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      ))}


<div className="col-span-1">
  <label className="block text-sm font-medium text-gray-700">Frame Shape</label>
  <select
    name="frameShape"
    value={formData.frameShape}
    onChange={handleChange}
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
  >
    <option value="">-- Select Frame Shape --</option>
    <option value="Rectangle">Rectangle</option>
    <option value="Square">Square</option>
    <option value="Round">Round</option>
    <option value="Oval">Oval</option>
    <option value="Cat Eye">Cat Eye</option>
    <option value="Wayfarer">Wayfarer</option>
    <option value="Aviator">Aviator</option>
    <option value="Browline">Browline</option>
    <option value="Geometric">Geometric</option>
    <option value="Butterfly">Butterfly</option>
    <option value="Wraparound">Wraparound</option>
    <option value="Clubmaster">Clubmaster</option>
    <option value="Navigator">Navigator</option>
    <option value="Oversized">Oversized</option>
    <option value="Rimless">Rimless</option>
    <option value="Semi-Rimless">Semi-Rimless</option>
    <option value="Shield">Shield</option>
    <option value="Sports">Sports</option>
    <option value="D-Shape">D-Shape</option>
    <option value="Horn-Rimmed">Horn-Rimmed</option>
  </select>
</div>



      {/* Branch Select from API */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700">Branch</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Select Branch</option>
          {branches.map((branch, idx) => (
            <option key={idx} value={branch.name}>{branch.name}</option>
          ))}
        </select>
      </div>

      {/* Stars */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700">Starts</label>
        <select
          name="starts"
          value={formData.starts}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          {starOptions.map((star, i) => (
            <option key={i} value={star}>{star}</option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Images Upload */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700">Product Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>

      {/* Try-On Image Upload */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700">Try-On Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleTryonChange}
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>

      <div className="col-span-full">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddcharmaForm;
