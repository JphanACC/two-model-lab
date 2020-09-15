const express = require('express');
const router = express.Router();
const db = require('../models')

//NOTE Create page route
router.get('/createListing', (req, res) => {
    res.render('computer/createListing')
})

//Create router
router.post('/', (req, res) => {
    db.Computer.create(req.body, (err, createNewListing) => {
        if (err) {
            console.log(err);
        } else {
            console.log(createNewListing);
            res.redirect('/computerSection');
        }
    })
})

//NOTE Index
router.get('/', (req, res) => {
    db.Computer.find({}, (err, showAll) => {
        if (err) {
            console.log(err);
        } else {
            res.render('computer/index', {
                computerList: showAll
            })
        }
    })
})

//NOTE Show
router.get('/:listingIndex', (req, res) => {
    db.Computer.findById(req.params.listingIndex, (err, oneListingDB) => {
        if (err) return res.send(err);
        res.render('computer/show.ejs', {
            oneComputer: oneListingDB
        })

    })
})



module.exports = router;