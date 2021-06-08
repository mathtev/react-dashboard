const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');

const LoginUser = require('../models/LoginUser');
const UserType = require('../types/UserType');
const bcrypt = require('bcrypt')

const addUser = {
  type: UserType,
  description: 'add new user',
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, args) => {
    args.password = await bcrypt.hash(args.password, 10);
    LoginUser.create(args);
  },
};

module.exports = addUser;
