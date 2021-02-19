const { GraphQLList } = require('graphql');

const { resolver } = require('graphql-sequelize');

const PostType = require('../types/PostType.js');
const Post = require('../models/Post.js');


const posts = {
  type: GraphQLList(PostType),
  // resolve: () => (
  //   [{
  //     id: 1,
  //     title: 'lol',
  //     content: 'lol2',
  //     updatedAt: 'hehe lol',
  //   }]
  // ),
  resolve: resolver(Post),
};

module.exports = posts;