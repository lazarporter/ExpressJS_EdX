const express = require('express')
const app = express()
const auth = require('./modules/auth.js')
const routes = require('./modules/routes.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let profile = {
    username: "Lazer",
    email:"fake@mailinator.com",
    url: "http://www.google.com"
}

app.use((req, res, next)=>{
    console.log(`${req.method}: ${req.url}`)
    next()
})
app.use(auth.checkAuth)       //run the request through the module/middleware called "auth", which checks for the precense of an API key.

//curl localhost:3000/profile?api_key=123
//version #1
 app.get('/profile', (req,res)=>{
      res.send(profile)
 })

//The below handler won't work until profile is added to res.locals
//app.get('/profile', routes.profileGet)

/*
    app.get('/', routes.rootGet)
    app.get('/accounts', (req, res, next)=>{
        console.log('accounts inline middleware')
        next(new Error('oops'))     
    },(req, res) => {
        res.send({msg:'accounts'})
    })

    app.post('/transactions', routes.transactionsPut)


    app.use((error,req,res,next)=>{     //error handlings
        res.status(500).send(error)     //.send ends the response, so no need for next()
    })

     
*/
let port = 3000
    app.listen(port, ()=>{
        console.log(`Server listening on localhost:${port}`)
    })