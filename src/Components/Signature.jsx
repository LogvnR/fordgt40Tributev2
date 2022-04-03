import React from 'react';

import classes from '../Styles/Signature.module.css';

import signaturePng from '../Assets/c-sSig.png';

const Signature = () => {
  return (
    <div className={classes.container}>
      <img className={classes.sig} src={signaturePng} alt="" />
    </div>
  );
};

export default Signature;
