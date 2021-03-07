const { GraphQLList } = require('graphql');

const { resolver } = require('graphql-sequelize');

const PostType = require('../types/PostType.js');
const Post = require('../models/Post.js');


const posts = {
  type: GraphQLList(PostType),
  resolve: resolver(Post),
};

module.exports = posts;