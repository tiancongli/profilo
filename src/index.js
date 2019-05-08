import React from 'react';
import ReactDOM from 'react-dom';
import { Scene } from './components/card.js';
import { Row, Col } from 'antd'
import './index.scss';

function MainList(props) {
  const numbers = [0, 1, 2, 3, 4, 5];
  return (
    <Row>
      {numbers.map((number) => 
        <Col
          md={8} sm={12} xs={24}
        >
          <Scene/>
        </Col>)}
    </Row>
  );
}

ReactDOM.render(
  <div>
    <header>
      <div>
      <h1 className="title DEATHNOTEFont">
        Welcome to TL's World
      </h1>
      <h2>
        and have fun.
      </h2>
      </div>
    </header>
    <main>
      <div className="spearhead">
        <div className="skills">
          skills
        </div>
        <div className="intro">
          self intro
        </div>
      </div>
      <MainList/>
    </main>
    <footer>
      <div>
        ICY Design ©2019 Created by TL
      </div>
    </footer>
  </div>,
  document.getElementById('root')
);