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

//NOTE Delete
router.delete('/:listingIndex', (req, res) => {
    db.Computer.findByIdAndDelete(req.params.listingIndex, (err, deletedListingDB) => {
        if (err) return res.send(err);
        res.redirect('/computerSection/')
    })
})

//NOTE Edit Page
router.get('/:listingIndex/edit', (req, res) => {
        db.Computer.findById(req.params.listingIndex, (err, editListingDB) => {
            if (err) return res.send(err);
            res.render('computer/edit.ejs', {
                editListing: editListingDB
            })
        })
    })
    //Update Router
router.put('/:listingIndex', (req, res) => {
    db.Computer.findByIdAndUpdate(req.params.listingIndex, req.body, { new: true }, (err, editDB) => {
        if (err) return res.send(err);
        res.redirect(`/computerSection/${req.params.listingIndex}`)
    })
})



module.exports = router;