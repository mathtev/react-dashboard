const { GraphQLNonNull, GraphQLInt } = require('graphql');

const PostType = require('../types/PostType');
const Post = require('../models/Post');

const deletePost = {
  type: PostType,
  description: 'delete new post',
  args: {
    id: {
      description: 'id of a post',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (root, args) => {
    Post.destroy({
      where: {
        id: args.id
      },
    });
  },
};

module.exports = deletePost;
