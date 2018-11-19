
module.exports = {
    getComments(req, res) {
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
        let id = req.params.postID
        res.locals.store.posts[id].comments[req.params.commentID] = req.body;
        res.status(200).send(`post ID: ${id},\ncommentID: ${req.params.commentID}\nPost:${JSON.stringify(res.locals.store.posts[id])}`)
    },
    removeComment(req, res) {
        let id = req.params.postID
        res.locals.store.posts[id].comments.splice(req.params.commentID,1)
        res.status(200).send(`post ID: ${id},\n${JSON.stringify(res.locals.store.posts[id])}`)

    }
  }
