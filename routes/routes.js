const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.static("public"))


router.get('/',(req,res) =>{
    res.sendFile(path.resolve('index.html'))
})
router.use(function(res, req, next){
    res.status(404).sendFile(path.resolve("404.html"))
})

module.exports = router