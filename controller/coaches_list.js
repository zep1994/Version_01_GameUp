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