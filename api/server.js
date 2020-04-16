/** @format */

const fastify = require('fastify')({ logger: true });
const User = require('./models/user.model');
const path = require('path');

fastify.register(require('fastify-objectionjs'), {
    knexConfig: {
    client: 'mysql',
    connection: 'mysql://root:WtXY&CxQ7imGN7@localhost:3306/test',
  },
  models: [User],
});

fastify.get('/', async (request, reply) => {
  try {
    reply.send({ hello: 'world' });
  } catch (err) {
    fastify.log.error(err);
  }
});


fastify.register(require('fastify-autoload'), {
  dir: path.join(__dirname, 'routes'),
  options: {
    prefix: '/api/',
  },
});

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`);
});
