const path = require('path')

const express = require('express')

const coachController = require('../controller/coaches_list')

const router = express.Router()


router.get('/coaches', coachController.getCoaches)

// : means look for dynamic data
// /coaches/341223
router.get('/coaches/:coachId', coachController.getCoach)

module.exports = router
