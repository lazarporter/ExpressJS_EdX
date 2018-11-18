
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
        //Implement from here down
        res.locals.store.posts[req.params.postID].comments[req.params.commentID] = req.body;
        res.status(200).send(`post ID: ${req.params.postID},\ncommentID: ${req.params.commentID}\nPost:${JSON.stringify(res.locals.store.posts[req.params.postID])}`)
    },
    removeComment(req, res) {
      
    }
  }
