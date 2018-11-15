module.exports = {
    getComments(req, res) {
      //app.get('/posts/:postID/comments', routes.comments.getComments)
        let id = req.params.postID
        res.status(200).send(res.locals.store.posts[id].comments)
    }, 
    addComment(req, res) {
        //app.post('/posts/:postID/comments', routes.comments.addComment)
        let id = req.params.postID
        res.locals.store.posts[id].comments.push(req.body)
        res.status(200).send(res.locals.store.posts[id])
    },
    updateComment(req, res) {
        let id = req.params.postID
        console.log(`post ID: ${req.params.postID}, commentID: ${req.params.commentID}`)
    },
    removeComment(req, res) {
      
    }  
  }
