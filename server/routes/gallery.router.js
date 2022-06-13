const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/:id', (req, res) => {
    //update database
    console.log('in router.put',req.body.likes)
    const sqlText = `
        UPDATE "images"
        SET "likes" = $2
        WHERE id = $1`
    //set variables for params
    const deleteId = req.params.id;
    const updatedLikes = req.body.likes;
    console.log('inrouter.put',deleteId,updatedLikes);
    // const isPurchased = req.body.isPurchased;
    //assign variables to params
    const sqlParams = [deleteId,updatedLikes];
    //send sql query to database
    pool.query(sqlText,sqlParams)
    .then((result) => {
        res.send(result.row);
        console.log('in items.router router.put then',)
    })
    .catch((error) => {
        console.log('error making database update', error);
    });
});

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM images ORDER BY likes DESC;`;
    pool.query(sqlText)
        .then((result) => {

            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting gallery in router.get');
            res.sendStatus(500);
        })
}); // END GET Route

router.post('/', (req, res) => {
    const image = req.body;
    const sqlText = `INSERT INTO images ("path", "description")
                     VALUES ($1, $2)`;
    pool.query(sqlText, [image.imagePath, image.imageDescription])
        .then((result) => {
            console.log(`Added item to the database`, image);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
});

module.exports = router;