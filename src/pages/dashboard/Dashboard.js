import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { BiCoinStack } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiWallet, BiCommentError } from 'react-icons/bi';

import Widget from '../../components/Widget/Widget';
import MyLineChart from '../../components/charts/MyLineChart';
import MyBarChart from '../../components/charts/MyBarChart';
import styled from './Dashboard.module.scss';
import { fetchPosts } from '../../actions/posts';
import { fetchChartsData } from '../../actions/charts';


const Dashboard = (props) => {

  const { fetchPosts } = props;
  const { fetchChartsData } = props;

  useEffect(() => {
    fetchPosts();
    fetchChartsData();
  }, [fetchPosts, fetchChartsData]);

  return (
    <div className={styled.root}>
      <Row>
        <Col className="col-12 col-sm-6 col-xl-3 pr-4">
          <Widget footer="Updated now">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <BiCoinStack color="gold" size="50px" />
              </div>
              <div className="ml-auto">
                <h6 className="text-right">Capacity</h6>
                <h2 className="text-right">150GB</h2>
              </div>
            </div>
          </Widget>
        </Col>
        <Col className="col-12 col-sm-6 col-xl-3 pr-4">
          <Widget footer="Last day">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <BiWallet color="brown" size="50px" />
              </div>
              <div className="ml-auto">
                <h6 className="text-right">Revenue</h6>
                <h2 className="text-right">$2,405</h2>
              </div>
            </div>
          </Widget>
        </Col>
        <Col className="col-12 col-sm-6 col-xl-3 pr-4">
          <Widget footer="Last hour">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <BiCommentError color="red" size="50px" />
              </div>
              <div className="ml-auto">
                <h6 className="text-right">Errors</h6>
                <h2 className="text-right">4</h2>
              </div>
            </div>
          </Widget>
        </Col>
        <Col className="col-12 col-sm-6 col-xl-3 pr-4">
          <Widget footer="Updated now">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <AiOutlineTwitter color="#00acee" size="50px" />
              </div>
              <div className="ml-auto">
                <h6 className="text-right">Followers</h6>
                <h2 className="text-right">+30</h2>
              </div>
            </div>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-6">
          <Widget>
            <h3>Line Chart</h3>
            <p className="text-muted">24 hour performance</p>
            {props.chartsData && <MyLineChart data={props.chartsData} />}
          </Widget>
        </Col>
        <Col className="col-xl-6">
          <Widget>
            <h3>Bar Chart</h3>
            <p className="text-muted">24 hour performance</p>
            {props.chartsData && <MyBarChart data={props.chartsData} />}
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-6">
          <Widget>
            <h3>Posts</h3>
            <hr></hr>
            {props.posts && props.posts.slice(0, 6).map(post => (
              <p key={post.id}>
                {post.title}
                <span className="pull-right text-muted">{post.updatedAt}</span>
              </p>
            ))}
          </Widget>
        </Col>
      </Row>
    </div >
  );
}

const mapStateToProps = (state) => ({
  isFetchingPosts: state.posts.isFetching,
  isFetchingChartsData: state.charts.isFetching,
  posts: state.posts.posts,
  chartsData: state.charts.chartsData
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => { dispatch(fetchPosts()) },
  fetchChartsData: () => { dispatch(fetchChartsData()) }
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
