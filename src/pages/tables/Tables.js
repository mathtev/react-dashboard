import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Input, Label, Progress } from 'reactstrap';
import cx from 'classnames';

import Widget from '../../components/Widget/Widget';
import styled from './Tables.module.scss';


const useFetch = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const _getUser = async () => {
      const result = await fetch('https://api.github.com/users');
      const data = await result.json();
      setUsers(data);
    }
    _getUser();
  }, []);

  return { users };
}

const Tables = () => {
  // eslint-disable-next-line
  const [mainTable, setMainTable] = useState({
    tableRows: [
      {
        id: 1,
        picture: require('../../images/tables/bird.jpg').default,
        description: 'Blue Bird',
        date: 'November 21 2021',
        info: {
          size: '1,23 MB',
          type: 'jpg'
        },
        progress: '40'
      },
      {
        id: 2,
        picture: require('../../images/tables/city.jpg').default,
        description: 'Chicago',
        date: 'March 1 2021',
        info: {
          size: '1,23 MB',
          type: 'png'
        },
        progress: '20'
      },
      {
        id: 3,
        picture: require('../../images/tables/flower.jpg').default,
        description: 'Red Flower',
        date: 'November 21 2021',
        info: {
          size: '2,31 MB',
          type: 'gif'
        },
        progress: '40'
      },
      {
        id: 4,
        picture: require('../../images/tables/moon.jpg').default,
        description: 'Cosmos',
        date: 'January 2 2021',
        info: {
          size: '1,13 MB',
          type: 'jpg'
        },
        progress: '80'
      },
      {
        id: 5,
        picture: require('../../images/tables/tree.jpg').default,
        description: 'Spring',
        date: 'September 12 2020',
        info: {
          size: '2,23 MB',
          type: 'png'
        },
        progress: '10'
      },
    ],
  });
  const [checkboxState, setCheckboxState] = useState({
    checkboxes1: [false, true, false, false, false],
    checkboxes2: [false, false, false, false, true],
  });

  const { users } = useFetch();

  const changeCheck = (checkboxes, idx) => {
    let newCheckboxes = checkboxState[checkboxes];
    newCheckboxes[idx] = !newCheckboxes[idx];
    setCheckboxState((prevState) => ({ ...prevState, [checkboxes]: newCheckboxes }));
  }

  const checkAll = (checkboxes) => {
    let newCheckboxes = checkboxState[checkboxes];
    newCheckboxes = newCheckboxes.fill(!newCheckboxes[0]);
    setCheckboxState((prevState) => ({ ...prevState, [checkboxes]: newCheckboxes }));
  }

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Widget>
            <h3 className="pb-3">Main Table</h3>
            <div style={{ overflowX: 'auto' }}>
              <Table className={cx(styled.mainTable)}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>PICTURE</th>
                    <th>DESCRIPTION</th>
                    <th>DATE</th>
                    <th>INFO</th>
                  </tr>
                </thead>
                <tbody>
                  {mainTable.tableRows.map(tableRow => (
                    <tr>
                      <td>
                        {tableRow.id}
                      </td>
                      <td>
                        <img src={tableRow.picture} alt="table img"/>
                      </td>
                      <td>
                        {tableRow.description}
                      </td>
                      <td>
                        {tableRow.date}
                      </td>
                      <td>
                        <p className="mb-0">
                          <small>
                            <b>Size:&nbsp;</b>
                            {tableRow.info.size}
                          </small>
                        </p>
                        <p className="mb-0">
                          <small>
                            <b>Type:&nbsp;</b>
                            {tableRow.info.type}
                          </small>
                        </p>
                      </td>
                      <td style={{ width: '60px' }}>
                        <Progress
                          color="success" value={tableRow.progress}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Widget footer="fetched from https://api.github.com/users">
            <h3 className="pb-3">Stripped Table</h3>
            <Table className={cx(styled.secondaryTable, "table-striped")}>
              <thead>
                <tr>
                  <th>
                    <div className="abc-checkbox">
                      <Input
                        id="checkbox1-0" type="checkbox" checked={checkboxState.checkboxes1[0]}
                        onChange={() => checkAll('checkboxes1')}
                      />
                      <Label for="checkbox1-0" />
                    </div>
                  </th>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.slice(0, 4).map((user, idx) => (
                    <tr key={user.id}>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id={"checkbox1-" + idx + 1} type="checkbox" checked={checkboxState.checkboxes1[idx + 1]}
                            onChange={() => changeCheck('checkboxes1', idx + 1)}
                          />
                          <Label for={"checkbox1-" + idx + 1} />
                        </div>
                      </td>
                      <td>
                        {user.id}
                      </td>
                      <td>
                        {user.login}
                      </td>
                      <td>
                        <img src={user.avatar_url} alt="user img"></img>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Widget>
        </Col>
        <Col lg={6}>
          <Widget footer="fetched from https://api.github.com/users">
            <h3 className="pb-3">Hover Table</h3>
            <Table className={cx(styled.secondaryTable, "table-hover")}>
              <thead>
                <tr>
                  <th>
                    <div className="abc-checkbox">
                      <Input
                        id="checkbox2-0" type="checkbox" checked={checkboxState.checkboxes2[0]}
                        onChange={() => checkAll('checkboxes2')}
                      />
                      <Label for="checkbox2-0" />
                    </div>
                  </th>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.slice(0, 4).map((user, idx) => (
                    <tr key={user.id}>
                      <td>
                        <div className="abc-checkbox">
                          <Input
                            id={"checkbox2-" + idx + 1} type="checkbox" checked={checkboxState.checkboxes2[idx + 1]}
                            onChange={() => changeCheck('checkboxes2', idx + 1)}
                          />
                          <Label for={"checkbox2-" + idx + 1} />
                        </div>
                      </td>
                      <td>
                        {user.id}
                      </td>
                      <td>
                        {user.login}
                      </td>
                      <td>
                        <img src={user.avatar_url} alt="user img"></img>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Widget>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Widget footer="fetched from https://api.github.com/users">
            <h3 className="pb-3">Bordered Table</h3>
            <Table className={cx(styled.secondaryTable, "table-bordered")}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Avatar</th>
                  <th>Url</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.slice(0, 4).map((user, idx) => (
                    <tr key={user.id}>
                      <td>
                        {idx + 1}
                      </td>
                      <td>
                        {user.login}
                      </td>
                      <td>
                        <img src={user.avatar_url} alt="user img"></img>
                      </td>
                      <td>
                        <a href={user.url}>{user.url.replace(/(^\w+:|^)\/\//, '')}</a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default Tables
