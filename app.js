const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const authRoutes = require('./routes/authRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const FeedbackObserver = require('./observers/feedBackObserver');
const avaliacaoService = require('./services/avaliacaoService');
const cors = require('cors');
const welcomePage = require("./utils/welcomePageAPI");

require('dotenv').config();

const app = express();
const BASE_URL = process.env.BASE_URL || '/api/v1/';
const DB_URI_FINAL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sommpath.vp5dp.mongodb.net/sommpathdb?retryWrites=true&w=majority&appName=SommPath`;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

// Register the FeedbackObserver with AvaliacaoService
avaliacaoService.addObserver(new FeedbackObserver());

// MongoDB connection and server initialization
(async () => {
  try {
    await mongoose.connect(DB_URI_FINAL, {
      serverSelectionTimeoutMS: 60000,
    });
    console.log('Connected to MongoDB');

    // Routes
    app.get('/', (req, res) => {
      res.setHeader('Content-Type', 'text/html');
      res.send(welcomePage['welcomePage']);
    });

    app.use(`${BASE_URL}`, userRoutes);
    app.use(`${BASE_URL}`, authRoutes);
    app.use(`${BASE_URL}`, configuracaoRoutes);
    app.use(`${BASE_URL}`, avaliacaoRoutes);
    app.use(`${BASE_URL}`, feedbackRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
})();
