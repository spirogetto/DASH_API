const express = require('express');
const cors = require('cors')
require('dotenv').config()
const todorout = require('./routes/todos')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://mushfikmaruf:database@tble.b8tyoyq.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection
db.once('open', ()=>console.log('subt'));



const app = express()
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/todos',todorout);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
    res.json(req.body)
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});

