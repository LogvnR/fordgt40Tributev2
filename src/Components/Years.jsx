import React from 'react';

import classes from '../Styles/Years.module.css';

import sixty6 from '../Assets/win-66.png';
import sixty7 from '../Assets/win-67.png';
import sixty8 from '../Assets/win-68.png';
import sixty9 from '../Assets/win-69.png';

const Years = () => {
  return (
    <div className={classes.container}>
      <img className={classes.year} src={sixty6} alt="Sixty Six" />
      <img className={classes.year} src={sixty7} alt="Sixty Seven" />
      <img className={classes.year} src={sixty8} alt="Sixty Eight" />
      <img className={classes.year} src={sixty9} alt="Sixty Nine" />
    </div>
  );
};

export default Years;
