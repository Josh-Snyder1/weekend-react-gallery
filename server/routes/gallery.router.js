const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM images ORDER BY likes ASC;`;
    pool.query(sqlText)
        .then((result) => {

            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting gallery in router.get');
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;