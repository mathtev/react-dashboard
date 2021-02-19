"use strict";

var _require = require('graphql'),
    GraphQLList = _require.GraphQLList;

var _require2 = require('graphql-sequelize'),
    resolver = _require2.resolver;

var PostType = require('../types/PostType.js');

var Post = require('../models/Post.js');

var posts = {
  type: GraphQLList(PostType),
  // resolve: () => (
  //   [{
  //     id: 1,
  //     title: 'lol',
  //     content: 'lol2',
  //     updatedAt: 'hehe lol',
  //   }]
  // ),
  resolve: resolver(Post)
};
module.exports = posts;