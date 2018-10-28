//module for authentication.
//at this stage, it simply checks for the presence of any API key.


module.exports = {
    checkAuth: function(req, res, next) {
        if (req.query.api_key) {        //any API key will do
            next()
        } else{
            res.status(401).send({msg: 'not authorized'})   //API key is absent
        }    
    }
    //some other function to export

    //some other function to export
}