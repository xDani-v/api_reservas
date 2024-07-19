const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.routes'); // Import the general routes file
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes); // Use the general routes file

// Other app setup code...

app.listen(3000, () => console.log('Server is running at http://localhost:3000'));