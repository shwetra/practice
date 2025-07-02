import React, { useState } from 'react';
import axios from 'axios';

const ProductUploadForm = () => {
  const [images, setImages] = useState([]);
  const [tryonImage, setTryonImage] = useState(null);
  const [productData, setProductData] = useState({
    brandName: '',
    productType: '',
    frameType: '',
    frameShape: '',
    countryOfOrigin: '',
    modelNo: '',
    frameSize: '',
    frameWidth: '',
    frameDimensions: '',
    suitedFor: '',
    frameColor: '',
    weight: '',
    weightGroup: '',
    material: '',
    frameMaterial: '',
    templeMaterial: '',
    prescriptionType: '',
    frameStyle: '',
    frameStyleSecondary: '',
    collection: '',
    productWarranty: '',
    gender: '',
    height: '',
    condition: '',
    templeColor: '',
    price: '',
    discountPrice: ''
  });

  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleTryonChange = (e) => {
    setTryonImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    images.forEach((img) => formData.append('images', img));
    if (tryonImage) formData.append('tryonImage', tryonImage);

    for (const key in productData) {
      formData.append(key, productData[key]);
    }

    try {
        console.log(formData)
      const res = await axios.post('http://localhost:3000/upload-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res)
      alert('✅ Product uploaded successfully!');
    } catch (error) {
      alert('❌ Error uploading product');
      console.error(error);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {Object.entries(productData).map(([key, value]) => (
            <div className="col-md-6 mb-3" key={key}>
              <label className="form-label text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                name={key}
                className="form-control"
                value={value}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Product Images</label>
          <input
            type="file"
            className="form-control"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Try-on Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleTryonChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Upload Product</button>
      </form>
    </div>
  );
};

export default ProductUploadForm;
