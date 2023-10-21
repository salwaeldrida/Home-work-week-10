const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./routes/movies');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Lokasi penyimpanan file

const app = express();

app.use(bodyParser.json());

app.use('/movies', moviesRouter);

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
