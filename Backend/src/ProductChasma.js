const express = require('express');
const router = express.Router();
const Product = require('../Model/ChasmaModle');
const { Op } = require('sequelize');

// CREATE 
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: '✅ Product created successfully',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '❌ Error creating product',
      error: error.message,
    });
  }
});

// UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const updated = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated[0] === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const updatedProduct = await Product.findByPk(req.params.id);
    res.json({
      success: true,
      message: '✅ Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '❌ Error updating product',
      error: error.message,
    });
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({
      success: true,
      message: '🗑️ Product deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '❌ Error deleting product',
      error: error.message,
    });
  }
});

//get for website onlya active
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const offset = (page - 1) * limit;

    const whereClause = {
      status: 'active',
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        { brandName: { [Op.like]: `%${search}%` } },
        { modelNo: { [Op.like]: `%${search}%` } },
        { frameShape: { [Op.like]: `%${search}%` } },
        { gender: { [Op.like]: `%${search}%` } }
      ]
    };

    const { rows: products, count: total } = await Product.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: products,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '❌ Error fetching products',
      error: error.message
    });
  }
});




// GET (for admin panel)
router.get('/all', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const offset = (page - 1) * limit;

    const whereClause = {
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        { brandName: { [Op.like]: `%${search}%` } },
        { modelNo: { [Op.like]: `%${search}%` } },
        { frameShape: { [Op.like]: `%${search}%` } }
      ]
    };

    const { rows: products, count: total } = await Product.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']] // Show newest products first
    });

    res.json({
      success: true,
      data: products,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalItems: total
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '❌ Error fetching products for admin',
      error: error.message
    });
  }
});



module.exports = router;
