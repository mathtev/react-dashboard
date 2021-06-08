const { GraphQLList, GraphQLNonNull, GraphQLInt } = require('graphql');

const { resolver } = require('graphql-sequelize');

const PostType = require('../types/PostType.js');
const Post = require('../models/Post.js');

exports.allPosts = {
  type: GraphQLList(PostType),
  resolve: resolver(Post),
};

exports.postById = {
  type: PostType,
  // args will automatically be mapped to `where`
  args: {
    id: {
      description: 'id of a post',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: resolver(Post),
};


