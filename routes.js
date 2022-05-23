const { Router } = require('express')
const router = Router()
const IndexController = require('./controllers/IndexController')


router.get('/', IndexController.index)
router.get('/sobre', IndexController.show)



module.exports = router