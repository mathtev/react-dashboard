 const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const me = require('./queries/me.js');
const posts = require('./queries/posts.js');
const {allPosts, postById} = require('./queries/posts.js');
const addPost = require('./mutations/addPost.js');
const deletePost = require('./mutations/deletePost.js');
const updatePost = require('./mutations/updatePost.js');
const addUser = require('./mutations/addUser.js');


const RootQuery = {
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      me,
      allPosts,
      postById
    },
  }),
};

RootQuery.mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost,
    updatePost,
    deletePost,
    addUser
  }
})

module.exports = new GraphQLSchema(RootQuery);