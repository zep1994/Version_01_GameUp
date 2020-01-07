const path = require('path')

const express = require('express')

const coachController = require('../controller/coaches_list')

const router = express.Router()


router.get('/coaches', coachController.getCoaches)

module.exports = router
