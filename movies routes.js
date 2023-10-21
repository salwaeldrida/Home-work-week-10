const express = require('express');
const MovieController = require('../controllers/MovieController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Lokasi penyimpanan file

const router = express.Router();

router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.post('/', MovieController.add);
router.put('/:id', MovieController.update);
router.delete('/:id', MovieController.delete);

// Rute untuk mengunggah foto
router.put('/:id/photo', upload.single('photo'), MovieController.uploadPhoto);

module.exports = router;
