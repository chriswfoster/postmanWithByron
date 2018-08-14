const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();
app.use(cors());
app.use(json());

const PORT = 1739;





app.listen(PORT, console.log(`Tuning in to channel ${PORT}`))