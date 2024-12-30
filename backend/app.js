const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Update this if your frontend runs on a different port
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Require the routes
const newsRoutes = require('./routes');
app.use(newsRoutes);

module.exports = app;
