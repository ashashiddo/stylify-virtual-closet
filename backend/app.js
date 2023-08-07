const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const usersRoutes = require('./routes/users');
const clothesRoutes = require('./routes/clothes');

app.use('/api/users', usersRoutes);
app.use('/api/clothes', clothesRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
