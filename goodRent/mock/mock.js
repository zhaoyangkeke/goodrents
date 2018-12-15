const homedata = require('./home.js')
const citydata = require('./city.js')

module.exports = function(app){
    app.get('/api/miniapps/getindexlist',function(req,res){
        res.json(homedata)
    })
    app.get('/api/miniapps/getcitylist',function(req,res){
        res.json(citydata)
    })
}