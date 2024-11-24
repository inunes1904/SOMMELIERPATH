const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const cors = require('cors');

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
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));

app.get('/', (req, res) => {
  res.send(
    '<h1>WELCOME TO SOMMELIER PATH API</h1>\n' +
    '<p>ROUTES:</p>\n' +
    '\n' +
    '<ul>\n' +
    '  <li><a href="/users">GET /users</a> - Fetch a list of all users</li>\n' +
    '  <li><a href="/users/:id">GET /users/:id</a> - Fetch details of a specific user</li>\n' +
    '  <li><a href="/users">POST /users</a> - Create a new user</li>\n' +
    '  <li><a href="/users/:id">PUT /users/:id</a> - Update a user\'s details</li>\n' +
    '  <li><a href="/users/:id">DELETE /users/:id</a> - Delete a user</li>\n' +
    '</ul>\n' +
    '\n' +
    '<ul>\n' +
    '  <li><a href="/configuracao">GET /configuracao</a> - Fetch a list of all wine-tasting configurations</li>\n' +
    '  <li><a href="/configuracao/:id">GET /configuracao/:id</a> - Fetch details of a specific wine-tasting configuration</li>\n' +
    '  <li><a href="/configuracao">POST /configuracao</a> - Create a new wine-tasting configuration</li>\n' +
    '  <li><a href="/configuracao/:id">PUT /configuracao/:id</a> - Update a wine-tasting configuration</li>\n' +
    '  <li><a href="/configuracao/:id">DELETE /configuracao/:id</a> - Delete a wine-tasting configuration</li>\n' +
    '</ul>' +
    '<ul>' +
    '<li><a href="/avaliacao">GET /avaliacao</a> - Fetch a list of all evaluations</li>' +
    '<li><a href="/avaliacao/:id">GET /avaliacao/:id</a> - Fetch details of a specific evaluation</li>' +
    '<li><a href="/avaliacao">POST /avaliacao</a> - Create a new evaluation</li>' +
    '<li><a href="/avaliacao/:id">PUT /avaliacao/:id</a> - Update an evaluation</li>' +
    '<li><a href="/avaliacao/:id">DELETE /avaliacao/:id</a> - Delete an evaluation</li>' +
    '</ul>' +
    '<ul>'+
      '<li><a href="/users">GET /users</a> - Fetch a list of all users</li>'+
      '<li><a href="/users/:id">GET /users/:id</a> - Fetch details of a specific user</li>'+
      '<li><a href="/users">POST /users</a> - Create a new user</li>'+
     ' <li><a href="/users/:id">PUT /users/:id</a> - Update a user role (admin only)</li>'+
      '<li><a href="/users/:id">DELETE /users/:id</a> - Delete a user (admin only)</li>'+

      '<li><a href="/login">POST /login</a> - User login to authenticate and receive a token</li>'+
      '<li><a href="/user">GET /user</a> - Retrieve user information (requires valid token)</li>'+
    '</ul>'
  );
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
