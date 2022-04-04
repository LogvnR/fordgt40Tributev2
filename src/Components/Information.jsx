import {
  faGear,
  faCar,
  faScrewdriverWrench,
  faFlagCheckered,
} from '@fortawesome/free-solid-svg-icons';

import classes from '../Styles/Information.module.css';
import Icon from './UI/Icon';
import specs from '../Assets/specs.jpg';
import ferrari from '../Assets/ferrari.jpg';
import development from '../Assets/development.jpg';
import leMans from '../Assets/leMans.jpg';

const Information = () => {
  return (
    <div className={classes.container}>
      <Icon image={specs} title="Specifications" icon={faGear} />
      <Icon image={ferrari} title="Ferrari" icon={faCar} />
      <Icon
        image={development}
        title="Development"
        icon={faScrewdriverWrench}
      />
      <Icon image={leMans} title="Le Mans" icon={faFlagCheckered} />
    </div>
  );
};

export default Information;
