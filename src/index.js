import React from 'react';
import ReactDOM from 'react-dom';
import { Scene } from './components/card';
import { Row, Col, Icon } from 'antd'
import './index.scss';
import { Quote } from './components/quote';

function MainList(props) {
  const numbers = [0, 1, 2, 3, 4, 5];
  return (
    <Row>
      {numbers.map((number) => 
        <Col
          key={number}
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
        <h1>
          Welcome to TL's World
        </h1>
        <h2>
          and have fun.
        </h2>
        <a href="https://github.com/tiancongli" target="_blank">
          <Icon type="github" />
        </a>
        <a href="https://www.linkedin.com/in/tiancong-li-5067aa79/" target="_blank">
          <Icon type="linkedin" theme="filled" />
        </a>
        
      </div>
    </header>
    <main>
      <div className="spearhead">
        <div className="skills">
          skills
        </div>
        <div className="intro">
          <Quote
            text={
              <p>
                Debugging is twice as hard as writing the code in the first place.<br/>
                Therefore, if you write the code as cleverly as possible, you are, 
                by definition, not smart enough to debug it.
              </p>
            }
            author={'Brian W. Kernighan'}
          />

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