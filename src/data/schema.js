const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const posts = require('./queries/posts.js');


const RootQuery = {
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      posts,
    },
  }),
};

module.exports = new GraphQLSchema(RootQuery);