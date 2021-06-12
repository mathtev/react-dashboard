import React from 'react'
import { Route, Switch } from 'react-router'
import NewPost from './postsComponents/NewPost'
import EditPost from './postsComponents/EditPost'
import PostsList from './postsComponents/PostsList/PostsList'

const Posts = () => {
  return (
    <Switch>
      <Route path="/app/posts" exact component={PostsList} />
      <Route path="/app/posts/new" exact component={NewPost} />
      <Route path="/app/posts/:id" exact component={EditPost} />
    </Switch>
  )
}

export default Posts
