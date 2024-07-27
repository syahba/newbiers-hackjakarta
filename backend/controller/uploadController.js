const express = require("express");
const path = require("node:path");
const multer = require("multer");
const {v4:uuidv4} = require("uuid");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '..', 'public', 'images'));
    },
    filename: (req, file, cb) => {
        const uniqueName = uuidv4() + '.png'; // Generate a unique name with UUID and set it to PNG
        cb(null, uniqueName);
      }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res) => {
    try {
        const filePath = `/images/${req.file.filename}`;
        res.json({
          message: 'Image uploaded successfully',
          data: {
            url: filePath
          }
        });
    } catch (error) {
        res.status(400).send('Error uploading image');
    }
});

module.exports = router;