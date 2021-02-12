import React from 'react';
import { Row, Col } from 'reactstrap';

import { BiCoinStack } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiWallet, BiCommentError } from 'react-icons/bi';

import Widget from '../../components/Widget/Widget';
import MyLineChart from '../../components/charts/MyLineChart';
import MyBarChart from '../../components/charts/MyBarChart';
import styled from './Dashboard.module.scss';


const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = (props) => {
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
        <Col>
          <Widget>
            <h3>Line Chart</h3>
            <p className="text-muted">24 hour performance</p>
            <MyLineChart data={data} />
          </Widget>
        </Col>
        <Col>
          <Widget>
            <h3>Bar Chart</h3>
            <p className="text-muted">24 hour performance</p>
            <MyBarChart data={data} />
          </Widget>
        </Col>
      </Row>
    </div >
  );
}


export default Dashboard;