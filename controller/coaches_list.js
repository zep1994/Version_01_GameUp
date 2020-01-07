const Coach = require('../models/coach')

exports.getProducts = (req, res, next) => {
    Coach.fetchAll((coaches) => {
        res.render('coach/coach.ejs', {
            coach: coaches,
            pageTitle: 'Coaches',
            path: '/coaches'
        })
    })
}