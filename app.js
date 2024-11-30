const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const cors = require('cors');
const welcomePage = require("./utils/welcomePageAPI");

require('dotenv').config();

const app = express();
const BASE_URL = '/api/v1';
const DB_URI_FINAL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sommpath.vp5dp.mongodb.net/?retryWrites=true&w=majority&appName=SommPath`;

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

// MongoDB connection
mongoose.connect(DB_URI_FINAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(  welcomePage['welcomePage']  );
});

// Routes
app.use(`${BASE_URL}/users`, userRoutes);
app.use(`${BASE_URL}`, authRoutes);
app.use(`${BASE_URL}/configuracao`, configuracaoRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
