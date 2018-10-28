var exports = module.exports
module.exports = {
    rootGet: function(req, res){
        res.send({msg:'Hello World from /'})      
        //.send ends the response, so no need for next()
    },

    transactionsPut: function (req, res, next) {
        console.log(req.body)
        res.send({msg:'hello world from /transactions'})
        //.send ends the response, so no need for next()    
    }/*,
    //The below handler won't work until profile is added to res.locals
    profileGet: function (req, res, next){
        res.send(profile)
    }*/
}
