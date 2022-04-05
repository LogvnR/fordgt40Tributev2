import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import classes from '../Styles/Champion.module.css';

const Champion = () => {
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
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-once="false"
      className={classes.container}
    >
      <p className={classes.champion}>4x 24hrs of Le Mans Champion</p>
    </div>
  );
};

export default Champion;
