const express = require('express');
const cors = require('cors');
const { PORT, API_URL } = require('./config');

const app = express();
app.use(cors('*'));
app.use(express.json());

// defining routes
app.use('/stations', require('./routes/stations'));
app.use('/buses', require('./routes/buses'));

// starting server
app.listen(PORT, () => {
  console.log(`API running on ${API_URL}:${PORT}`);
});