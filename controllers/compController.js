const express = require('express');
const router = express.Router();
const db = require('../models')

//NOTE Create


//NOTE Index
router.get('/', (req, res) => {
    res.render('computer/index')
})

module.exports = router;