import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/posts';

const Notifications = (props) => {

  const { fetchPosts } = props;

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      {console.log(props)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.posts.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => { dispatch(fetchPosts()) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Notifications);