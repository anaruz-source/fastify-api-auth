const {
    getAdminsSchema,
    registerAdminSchema,
    loginAdminSchema
} = require('../controllers/schemas/adminsSchemas')
const {
    getAdminsHandler,
    registerAdminHandler,
    loginAdminHandler

} = require('../controllers/handlers/adminsHandlers')

const adminsRoutes = (fastify, Options, done) => {


      fastify.get('/api/admins',
      {
          schema: getAdminsSchema,
          handler: getAdminsHandler
      }
      )


    fastify.put('/api/admins/new',
    {
        schema: registerAdminSchema,
        handler: registerAdminHandler
    })
    
// to test
// curl -X POST -H "Content-Type: application/json" -d '{"username":"sarahjohnson","password":"sarahCodes"}' http://localhost:5000/api/admins/login
    fastify.post('/api/admins/login',
    {
        schema: loginAdminSchema,
        handler: loginAdminHandler
       })
    done()

}


module.exports = adminsRoutes