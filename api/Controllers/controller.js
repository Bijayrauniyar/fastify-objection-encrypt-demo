/** @format */

const User = require('../models/user.model');
const fastify = require('fastify')({ logger: true });

// read all users from users table
const fetchUsers = async (req, reply) => {
  try {
    const users = await User.query().select('*');
    return users;
  } catch (err) {
    console.log(err);
    reply.send(err);
  }
};

// add user to users table 
const addUser = async (request, reply) => {
  const user = request.body;
  try {
    const users = await User.query().insert(user);
    reply.send(users);
  } catch (err) {
    fastify.log.error(err);
    return err;
  }
};

module.exports = { fetchUsers,addUser };
