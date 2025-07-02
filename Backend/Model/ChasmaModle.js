const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Product = sequelize.define('Product', {
  brandName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  productType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameShape: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryOfOrigin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  modelNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  frameSize: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameWidth: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameDimensions: {
    type: DataTypes.STRING,
    allowNull: false
  },
  suitedFor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameColor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weightGroup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameMaterial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  templeMaterial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prescriptionType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameStyle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  frameStyleSecondary: {
    type: DataTypes.STRING,
    allowNull: true
  },
  collection: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productWarranty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  height: {
    type: DataTypes.STRING,
    allowNull: false
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false
  },
  templeColor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true // Array of image URLs
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPrice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  tryonImage: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
   branch: {
    type: DataTypes.STRING,
    allowNull: true
  },
  productCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active'
  },
  starts: {
   type: DataTypes.INTEGER,
    defaultValue: 3
  }

}, {
  tableName: 'products',
  timestamps: true
});

module.exports = Product;
