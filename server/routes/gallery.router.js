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

module.exports = router;