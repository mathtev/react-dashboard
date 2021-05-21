 const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const me = require('./queries/me.js');
const posts = require('./queries/posts.js');
const addPost = require('./mutations/addPost.js');


const RootQuery = {
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      me,
      posts,
    },
  }),
};

RootQuery.mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost
  }
})

module.exports = new GraphQLSchema(RootQuery);