const express = require('express');
const router = express.Router();
const db = require('../models');

//NOTE Create page route
router.get('/createListing', (req, res) => {
    res.render('tv/createListing')
})

//Create router
router.post('/', (req, res) => {
    db.TV.create(req.body, (err, createNewListing) => {
        if (err) {
            console.log(err);
        } else {
            console.log(createNewListing);
            res.redirect('/TVSection');
        }
    })
})

//NOTE Index
router.get('/', (req, res) => {
    db.TV.find({}, (err, showAll) => {
        if (err) {
            console.log(err);
        } else {
            res.render('tv/index', {
                tvList: showAll
            })
        }
    })
})

//NOTE Show
router.get('/:listingIndex', (req, res) => {
    db.TV.findById(req.params.listingIndex, (err, oneListingDB) => {
        if (err) return res.send(err);
        console.log(req.params.listingIndex);

        res.render('tv/show.ejs', {
            oneTV: oneListingDB
        })

    })
})


module.exports = router;