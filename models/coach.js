//COACH PRODUCT MODEL
const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
        'data',
        'coaches.json'
        )

const getCoachesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([])
        }
        cb(JSON.parse(fileContent))
    })
}

module.exports = class Coach {
    constructor(title, description, price, imageURL) {
        this.title = title 
        this.description = description
        this.price = price 
        this.imageURL = imageURL
    }

    save() {
        getCoachesFromFile(coaches => { 
            coaches.push(this)
            fs.writeFile(p, JSON.stringify(coaches), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getCoachesFromFile(cb) 
    }
}
