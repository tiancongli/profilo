import React from 'react';
import './quote.scss';

export function Quote(props) {
  return (
    <blockquote>
      {props.text}
      <span className="author"><i>{props.author}</i></span>
    </blockquote>
  );
}