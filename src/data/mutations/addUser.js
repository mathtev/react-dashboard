const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');

const LoginUser = require('../models/LoginUser');
const UserType = require('../types/UserType');

const addUser = {
  type: UserType,
  description: 'add new user',
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, args) => LoginUser.create(args),
}

module.exports = addUser;