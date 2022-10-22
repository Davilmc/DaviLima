const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/routes')

app.use(express.static('public'))

app.use('/',routes)

app.listen(port,()=>{
console.log("servidor rodando na porta "+port )
}) 