const stringTyped = {type: 'string'}

const post = {
    type:'object',
    properties:{
      
        id:{
            type:  'number'
       },
       title: stringTyped,
       body: stringTyped
    }
}

const headerSchema = {
    type: 'object',
    required: ['token'],
    properties: {
        token: stringTyped
    }
}
const getPostsSchema = {

    response:{

        200:{

            type: 'array',
            items: post

        }
    }
}

const getPostSchema = {
    params: { 
        id: {
            type: 'number'
        }
    },
    response:{
        200: post
    }
}

const addPostSchema = {
    headers: headerSchema,
    body:{

        type: 'object',
        // 400 Bad Request error as a response if a required field is not provided.
        required: ['title', 'body'],
        properties: {
            title: stringTyped,
            body: stringTyped
        },
        response: {
            200: stringTyped
        }

    }

}

const updatePostSchema = {
    headers: headerSchema,

    params: {

        id: { type:'number' }
    },

    body: {
        type: 'object',
        required: ['title', 'body'],
        properties: {
            title: stringTyped,
            body: stringTyped
        },
        response: {

            200: stringTyped
        }
    },
    
}

const deletePostSchema = {

    headers: headerSchema,

    params: {

        type: 'number'
    },
    response: {
        200: stringTyped
    }
}

module.exports = {
    getPostsSchema,
    getPostSchema,
    addPostSchema,
    updatePostSchema,
    deletePostSchema    
}