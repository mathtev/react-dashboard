import React from 'react';
import { Row, Col } from 'reactstrap';

import { BiCoinStack } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiWallet, BiCommentError } from 'react-icons/bi';

import Widget from '../../components/Widget/Widget';
import styled from './Dashboard.module.scss';

const Dashboard = (props) => {
  return (
    <div className={styled.root}>
      <Row>
        <Col className="col-12 col-sm-6 col-xl-3 pr-4">
          <Widget footer="Updated now">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <BiCoinStack color="gold" size="50px"/>
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
                <BiWallet color="brown" size="50px"/>
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
                <BiCommentError color="red" size="50px"/>
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
                <AiOutlineTwitter color="#00acee" size="50px"/>
              </div>
              <div className="ml-auto">
                <h6 className="text-right">Followers</h6>
                <h2 className="text-right">+30</h2>
              </div>
            </div>
          </Widget>
        </Col>
      </Row>
    </div >
  );
}


export default Dashboard;