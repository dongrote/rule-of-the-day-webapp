import React from 'react';

const Hyperlink = props => (
  <a style={{color: 'black'}} href={props.href}>
    {props.content}
  </a>
);

export default Hyperlink;
