import './quote.scss';
import React from 'react';

export function Quote(props) {
  return (
    <blockquote>
      {props.text}
      <span className="author"><i>{props.author}</i></span>
    </blockquote>
  );
}