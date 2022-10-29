const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

const port = 3000

const routes = require('./routes/routes')

app.use(express.urlencoded({extended:true}))

app.use('/', routes)



app.listen(port, ()=>{
    console.log('Server Rodando na porta:'+port)
})

