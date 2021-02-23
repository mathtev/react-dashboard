import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { test } from '../../actions/posts';

const Notifications = (props) => {

  const { test } = props;

  useEffect(() => {
    test();
  }, [test]);

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
  test: () => { dispatch(test()) },
});


export default connect(mapStateToProps, mapDispatchToProps)(Notifications);