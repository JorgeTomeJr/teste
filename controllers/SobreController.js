const axios = require('axios').default

module.exports = class SobreController{
    static index(req,res){

        res.render('sobre')
    }
}

