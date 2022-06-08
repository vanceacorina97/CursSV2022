import React from 'react';

// @ts-ignore
import classes from './Card.module.css';

const Card = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
