require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./db/db');
const categoryRoutes = require('./src/Category'); 
const productRoutes = require('./src/ProductChasma'); 


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/product', productRoutes);

// Sync models to DB
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Tables synced'))
  .catch(err => console.error('❌ Sync error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
