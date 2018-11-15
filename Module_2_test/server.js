const express = require('express')
const path = require('path')
const routes = require(path.join(__dirname, 'routes'))
const bodyParser = require('body-parser')

let store = {
    posts: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/0',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
        {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
        {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}      
      ]
      }
    ]
  }

var app = express()
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.locals.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postID', routes.posts.updatePost)
app.delete('/posts/:postID', routes.posts.removePost)


app.get('/posts/:postID/comments', routes.comments.getComments)
app.post('/posts/:postID/comments', routes.comments.addComment)
//implement:
app.put('/posts/:postID/comments/:commentID', routes.comments.updateComment)
app.delete('/posts/:postID/comments/commentId', routes.comments.removeComment)



app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
})