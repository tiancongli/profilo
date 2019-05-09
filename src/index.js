import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd'
import { Scene } from './components/card';
import { Quote } from './components/quote';
import { CombinedTag } from './components/tag';
import { mainContents, mainContentsBg, skills } from './utils/tools';

function MainList(props) {
  return (
    <div className='mainList'>
        {mainContents.map((el, index) => 
          <Scene bg={mainContentsBg[index]} key={index}>
            {el}
          </Scene>)}
    </div>
  );
}

function TagList(props) {
  return (
    <div className='skills'>
      {Object.entries(skills).map(([skill, score]) => 
        <CombinedTag
          skill={skill}
          score={score}
          key={skill}
        />
        )}
    </div>
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
        <a href="https://github.com/tiancongli" target="_blank" rel="noopener noreferrer">
          <Icon type="github" />
        </a>
        <a href="https://www.linkedin.com/in/tiancong-li-5067aa79/" target="_blank" rel="noopener noreferrer">
          <Icon type="linkedin" theme="filled" />
        </a>
        
      </div>
    </header>
    <main>
      <div className="spearhead">
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
        <TagList/>
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