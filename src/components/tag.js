import './tag.scss';
import React from 'react';

export function CombinedTag(props) {
  let tailClass = 'tagtail';
  if (props.score.startsWith('B')) {
    tailClass += ' warning';
  } else if(props.score.startsWith('S')) {
    tailClass += ' primary';
  }
  return (
    <div className='combinedTag'>
      <span className='taghead'>{props.skill}</span>
      <span className={tailClass}>{props.score}</span>
    </div>
  );
}