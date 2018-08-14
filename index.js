const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');

const ctrl = require('./ctrl');

const app = express();
app.use(cors());
app.use(json());

const PORT = 1738;

app.get('/getUsers', ctrl.getUsers);
app.put('/updateUserAge', ctrl.updateUser);
app.post('/createUser', ctrl.createUser);
app.delete('/deleteUser', ctrl.deleteUser);



app.listen(PORT, console.log(`Tuning in to channel ${PORT}`));