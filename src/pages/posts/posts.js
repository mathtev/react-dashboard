import React from 'react'
import { Route, Switch } from 'react-router'
import NewPost from './postsComponents/NewPost'
import Post from './postsComponents/Post'
import PostsList from './postsComponents/PostsList'

const Posts = () => {
  return (
    <Switch>
      <Route path="/app/posts" exact component={PostsList} />
      <Route path="/app/posts/new" exact component={NewPost} />
      <Route path="/app/posts/:id" exact component={Post} />
    </Switch>
  )
}

export default Posts
