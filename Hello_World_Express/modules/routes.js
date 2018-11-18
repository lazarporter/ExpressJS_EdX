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

//https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+3T2018/courseware/1e95019f-b0fe-1ae9-fcf4-4e35d66aa371/b841a5c1-d845-7d49-568c-a2ee63560e0d/?child=first