const Coach = require('../models/coach')

exports.getCoaches = (req, res, next) => {
    Coach.fetchAll((coaches) => {
        res.render('coach/coach.ejs', {
            coaches: coaches,
            pageTitle: 'Coaches',
            path: '/coaches'
        })
    })
}

exports.getCoach = (req, res, next) => {
    const coach_Id = req.params.coachId
    Coach.findById(coach_Id, coach => {
        res.render('coach/coach-details', {coach: coach})
    })
    
}