const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const criteria = []

//find-coaches => GET
router.get('/find-coach', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'new.ejs'))
})

// /admin/add-product => POST
router.post('/find-coach', (req, res, next) => {
    criteria.push({ name: req.body.name})
    res.redirect('/coaches');
});

exports.router = router;
exports.criteria = criteria;
