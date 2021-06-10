const { GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');

const PostType = require('../types/PostType');
const Post = require('../models/Post');
const { getCurrentDate } = require('../../utils/date');

const updatePost = {
  type: PostType,
  description: 'update post',
  args: {
    id: {
      description: 'id of a post',
      type: new GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, args) =>
    Post.findOne({ where: { id: args.id } })
      .then((record) => {
        if (!record) {
          throw new Error('No record found');
        }
        let values = {
          title: args.title,
          content: args.content,
          updatedAt: getCurrentDate(),
        };
        record.update(values);
      })
      .catch((error) => {
        throw new Error(error);
      }),
};

module.exports = updatePost;
