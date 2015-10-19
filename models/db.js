var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/countriesDB')

var Country = mongoose.Schema({
    name: {type: String},
    frenchName: {type: String},
    localName: {type: String},
    region: {type: String},
    hasTravelled: {type:Boolean}
})

module.exports = {
	Country : mongoose.model("Country",Country)
}