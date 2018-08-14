const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const ctrl = require('./ctrl')

const app = express();
app.use(cors());
app.use(json());

const PORT = 1739;

app.get('/getUsers', ctrl.getUsers);
app.put('/updateUser', ctrl.updateUser);
app.post('/createUser', ctrl.createUser);
app.delete('/deleteUser', ctrl.deleteUser);



app.listen(PORT, console.log(`Tuning in to channel ${PORT}`))