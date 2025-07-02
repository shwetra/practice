const express = require('express');
const router = express.Router();
const Category = require('../Model/CategoryModle');

// ➕ CREATE Category
router.post('/', async (req, res) => {
  try {
    const { name, slug, status } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }
    const newCategory = await Category.create({ name, slug,  status });
    res.status(201).json({ success: true, message: 'Category created', data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating category', error: error.message });
  }
});

// 📥 GET All Categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching categories', error: error.message });
  }
});

// 📝 UPDATE Category by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, slug, description, status } = req.body;

    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });

    await category.update({ name, slug, description, status });
    res.status(200).json({ success: true, message: 'Category updated', data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating category', error: error.message });
  }
});

// ❌ DELETE Category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });

    await category.destroy();
    res.status(200).json({ success: true, message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting category', error: error.message });
  }
});

module.exports = router;
