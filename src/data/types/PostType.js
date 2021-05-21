const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');


const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'A Post',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Post id',
    },
    title: {
      type: GraphQLString,
      description: 'Post title',
    },
    content: {
      type: GraphQLString,
      description: 'Post content',
    },
    updatedAt: {
      type: GraphQLString,
      description: 'Date when the post was updated',
    },
    createdAt: {
      type: GraphQLString,
      description: 'Date when the post was created',
    },
  }),
});

module.exports = PostType;