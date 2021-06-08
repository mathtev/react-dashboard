import React from 'react'
import { Route, Switch } from 'react-router'
import NewPost from './postsComponents/NewPost'
import PostsList from './postsComponents/PostsList'

const Posts = () => {
  return (
    <Switch>
      <Route path="/app/posts" exact component={PostsList} />
      <Route path="/app/posts/new" exact component={NewPost} />
    </Switch>
  )
}

export default Posts
