const axios = require('axios').default

module.exports= class IndexController {
    static index(req, res){
        res.render('index')
    } 

    static show(req,res){
        res.render('sobre')
    }
}