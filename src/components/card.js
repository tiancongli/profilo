import './card.scss';
import React from 'react';
import { ways, face, card, getDirectionStr } from '../utils/tools.js'

function Face(props) {
  return (
    <div 
      className={face.INITAL_CLS}
    >
      {props.children}
    </div>
  );
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      direction: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  initClass() {
    this.className = card.INITAL_CLS;
  }

  addClass(className) {
    if (className != null) {
      this.className += " " + className;
    }
  }

  handleMouseEnter(e) {
    this.setState(
      {
        status: ways.IN,
        direction: getDirectionStr(e)
      }
    )
  }

  handleMouseLeave(e) {
    this.setState(
      {
        status: ways.OUT,
        direction: getDirectionStr(e)
      }
    );
  }

  render () {
    this.initClass();
    this.addClass(this.state.status);
    this.addClass(this.state.direction);
    return (
      <div 
        className={this.className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className='cardBg'>
          <img src={this.props.bg} alt=""/>
        </div>
        <Face>
          {this.props.children}
        </Face>
      </div>
    );
  };
}

function Scene(props) {
  return (
    <div className="scene">
      <Card bg={props.bg}>
        {props.children}
      </Card>
    </div>
  );
}

export { Scene };


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
