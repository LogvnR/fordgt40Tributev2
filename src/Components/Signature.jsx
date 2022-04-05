import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import classes from '../Styles/Signature.module.css';

import signaturePng from '../Assets/c-sSig.png';

const Signature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-back',
      animatedClassName: 'animated',
    });
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-delay="800"
      data-aos-duration="1000"
      data-aos-once="false"
      className={classes.container}
    >
      <img className={classes.sig} src={signaturePng} alt="" />
    </div>
  );
};

export default Signature;
