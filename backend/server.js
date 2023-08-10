const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const usersRoutes = require('./routes/userRoutes');
const clothesRoutes = require('./routes/clothingRoutes');

app.use('/api/users', usersRoutes);
app.use('/api/clothes', clothesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
