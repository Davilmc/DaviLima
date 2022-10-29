const path = require('path')
let pessoas = []
let usuario={user:'davi',pass:'1234'}

class PessoasController{
   
    static index(req,res)
    {
        res.render('index')
    }
    static sobre(req,res)
    {
        res.render('sobre')
    }
    
    static store(req,res)
    {
        let pessoa = req.body
        pessoa.nascimento = 2022-pessoa.ano
        pessoas.push(pessoa)
        console.log(pessoa)
    }
    static login(req,res)
    {
        let auth = false
        let user = req.body
        if(user.login==usuario.user)
        {
            auth=true
        }
        res.render('index',{
            auth:auth
        })
    }
    
}


module.exports = PessoasController