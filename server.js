const fastify = require('fastify')({ logger: true });

const adminsRoutes = require('./routes/admins');
const postRoutes = require('./routes/posts')


fastify.register(postRoutes)
fastify.register(adminsRoutes)


fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: { title: 'Fastify-api' },
    },
  });

const port = process.env.PORT || 5000


fastify.listen(port, fastify.log.info(`Fastify Server Running at ${port}`))