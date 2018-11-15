const path = require('path')
const postRts = require(path.join(__dirname, 'posts.js'))
const commentsRts = require(path.join(__dirname, 'comments.js'))



module.exports = {
    posts: postRts,
    comments: commentsRts
}