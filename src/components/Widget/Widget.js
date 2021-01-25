import React from 'react';

import styled from './Widget.module.scss';


const Widget = (props) => {
  return (
    <section className={styled.widget}>
      {props.title && <header>{props.title}</header>}
      <div>{props.children}</div>
      <hr></hr>
      <footer>{props.footer}</footer>
    </section>
  )
}

export default Widget;
