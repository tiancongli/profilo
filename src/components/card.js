import React from 'react';
import './card.scss';
import { ways, face, getDirectionStr } from '../utils/tools.js'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class Face extends React.Component {
  constructor(props) {
    super(props);
  }

  initClass() {
    this.className = face.INITAL_CLS;
  }

  addClass(className) {
    if (className != null) {
      this.className += " " + className;
    }
  }

  render() {
    this.initClass();
    this.addClass(this.props.status);
    this.addClass(this.props.direction);
    return (
      <div 
        className={this.className}
      >
        {this.props.direction}
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faceStatus: null,
      direction: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState(
      {
        faceStatus: ways.IN,
        direction: getDirectionStr(e)
      }
    )
  }

  handleMouseLeave(e) {
    this.setState(
      {
        faceStatus: ways.OUT,
        direction: getDirectionStr(e)
      }
    );
  }

  render () {
    return (
      <div 
        className="card" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Face 
          status={this.state.faceStatus}
          direction={this.state.direction}
        />
      </div>
    );
  };
}

class Scene extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="scene">
        <Card/>
      </div>
    );
  }
}

export { Scene };


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
