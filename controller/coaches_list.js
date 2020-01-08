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
    const coach_id = req.params.coachId
    console.log(coach_id)
    res.redirect('/')
}