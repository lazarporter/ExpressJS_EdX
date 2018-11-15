// GET and POST /posts
// PUT and DELETE /posts/:postId/

module.exports = {   
  getPosts(req, res) {
    res.status(200).send(res.locals.store.posts)   //send back all posts, i.e. the entire array  
  },
  addPost(req, res) {
    let postID = res.locals.store.posts.length //index that the post will end up in the array
    res.locals.store.posts.push(req.body)  //store the body new post in the array of posts
    res.status(201).send({id: postID})  //confirm successful, let the client know the ID for future use
  },
  updatePost(req, res) {
    res.locals.store.posts[req.params.postID] = req.body   //update the correct post
    res.status(200).send(res.locals.store.posts[req.params.postID])  //send back the updated post for the client to see
  },
  removePost(req, res) {
    res.locals.store.posts.splice(req.params.postID,1)  //remove the post from the array
    res.status(200).send(res.locals.store.posts)       //send back the updated posts array
  }
}