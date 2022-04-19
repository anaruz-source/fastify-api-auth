const stringTyped = {type: 'string'}

const getAdminsSchema = {

    response: {

        200:{

            type: 'array',
            items: {
                type:'object',
                properties: {
                    id:  {type: 'number'},
                    username: stringTyped,
                    email: stringTyped,
                }
            }
        }
    }
}


const registerAdminSchema = {

    body: {

        required: ['username', 'email', 'password'],
        type: 'object',
        properties: {

            username: stringTyped,
            email: stringTyped,
            password: stringTyped
        }
    },

    response: {

        200: stringTyped
    }
}


const loginAdminSchema = {

    body: {
        type: 'object',
        required: ['username', 'password'],
        properties: {

            username: stringTyped,
            password: stringTyped
        }
    },

    response:{
        200: {
            type: 'object',
            properties: {
                 token: stringTyped
                }
        }
    }

}

module.exports = {
    getAdminsSchema,
    registerAdminSchema,
    loginAdminSchema
}