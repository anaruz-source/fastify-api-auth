
const { getPostsSchema,
        getPostSchema,
        addPostSchema,
        updatePostSchema,
        deletePostSchema
       } = require('../controllers/schemas/postsSchemas')

  const  {
    getPostsHandler, 
    getPostHandler,
    addPostHandler,
    updatePostHandler,
    deletePostHandler
     } = require('../controllers/handlers/postsHandlers')



const verifyToken = require('../controllers/auth/verifyToken')
const { default: fastify } = require('fastify')

const postsRoutes = (fasty, opts, next) =>{
 
    fasty.get('/', {

        schema: getPostsSchema,
        handler: getPostsHandler
    })

    fasty.get('/api/posts/:id', {

        schema: getPostSchema,
        handler: getPostHandler
    })

    fasty
        .register(require('fastify-auth'))
        .after(() => privatePostRoutes(fasty));



    next()
}


const privatePostRoutes = (fasty) => {

        // to test this use any http client like curl or postman:
    // example with curl
    // curl -X PUT -H "Content-Type: application/json" -d '{"title":"new post 4","body":"this is a new post"}' http://localhost:5000/api/posts/new

    fasty.put('/api/posts/new', {

        schema: addPostSchema,
        handler: addPostHandler,
        preHandler: fasty.auth([verifyToken])
    })

     // to test this use any http client like curl or postman:
    // example with curl
    // curl -X PUT -H "Content-Type: application/json" -d '{"title":"new post 2","body":"this is an update to  post 2"}' http://localhost:5000/api/posts/update/2

    fasty.put('/api/posts/update/:id', {

        schema: updatePostSchema,
        handler: updatePostHandler,
        preHandler: fasty.auth([verifyToken])

    })

    // to test this use any http client like curl or postman:
    // example with curl
   // curl -X DELETE  -H "Accept: application/json" http://localhost:5000/api/posts/delete/1
    fasty.delete('/api/posts/delete/:id',
    
    {
        schema: deletePostSchema,
        handler: deletePostHandler,
        preHandler: fasty.auth([verifyToken])

    })
}
module.exports  = postsRoutes