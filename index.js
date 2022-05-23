const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const routes = require('./routes')
const helpers = require('./helpers/helpers')
require('dotenv').config()


app.use(express.static('public'))
app.engine('handlebars', engine({
    helpers:helpers
}))
app.set('view engine', 'handlebars')

app.get('/', routes)

app.listen(8080, () =>{
    console.log('Servidor rodando na porta 8080')
})