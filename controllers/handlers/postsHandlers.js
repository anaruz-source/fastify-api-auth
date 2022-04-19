let posts = require('../../database/postsDB')

const getPostsHandler = (req, resp) => {

    resp.send(posts)
}

const getPostHandler = (req, resp) => {

    const { id } = req.params

    const post = posts.filter (post => post.id == id)[0]

    if(!post ) resp.status(404).send(new Error('Post Not Found'))

    return resp.send(post)
}

const addPostHandler = (req, resp) => {

    const {title, body} = req.body

    posts.push({id: posts.length +1, title, body})
    resp.send('post added')
}

const updatePostHandler = (req, resp) => {

    const {title, body} = req.body
    const { id } = req.params

    // because filter returns an array, so acccess the first element, as it contains only one!
    const post = posts.filter( p => p.id === id)[0] 

    if(!post) return resp.send(new Error('No Post To Update'))

    post.title = title
    post.body = body

    return resp.send('post updated success!')
}

const deletePostHandler = (req, post) => {
    
    const { id } = req.params

    const l1 = posts.length
    
    posts =  posts.filter(p => p.id !== id)

    const l2 = posts.length

    if(l2 == l1) return resp.status(404).send (new Error('no post to delete'))

    return resp.send('post deleted')
}
module.exports = {
    getPostsHandler,
    getPostHandler,
    addPostHandler, 
    updatePostHandler,
    deletePostHandler
}