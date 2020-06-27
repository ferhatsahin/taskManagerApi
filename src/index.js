const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/mongoose');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});