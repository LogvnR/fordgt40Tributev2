import React from 'react';

import classes from '../../Styles/Content.module.css';

const Content = (props) => {
  return (
    <>{props.content && <p className={classes.content}>{props.content}</p>}</>
  );
};

export default Content;
