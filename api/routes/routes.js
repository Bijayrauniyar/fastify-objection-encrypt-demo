/** @format */

const { fetchUsers,addUser } = require('../Controllers/controller');
module.exports = async function (fastify, opts) {
  const routes = [  
    {
      method: 'GET',
      url: 'users',
      handler:fetchUsers 
    },
    {
      method: 'POST',
      url: 'users',
      handler: addUser
    },
  ];

  routes.forEach((route) => {
    fastify.route(route);
  });
};

