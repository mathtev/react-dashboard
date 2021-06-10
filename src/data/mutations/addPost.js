const { GraphQLNonNull, GraphQLString } = require('graphql');

const PostType = require('../types/PostType');
const Post = require('../models/Post');

const addPost = {
  type: PostType,
  description: 'add new post',
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    createdAt: {
      type: GraphQLString,
    },
  },
  resolve: (root, args) => Post.create(args),
}

module.exports = addPost;