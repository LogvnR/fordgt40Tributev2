import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

import classes from '../../Styles/Icon.module.css';

const Icon = (props) => {
  const [modal, setModal] = useState(false);
  // const open = () => {
  //   props.option(true);
  //   props.action();
  // };

  // const close = () => {
  //   props.option(false);
  // };

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <motion.div layout className={classes.container}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={modalHandler}
        className={
          modal
            ? `${classes['icon-container']} ${classes.invisible}`
            : classes['icon-container']
        }
      >
        <FontAwesomeIcon className={classes.icon} icon={props.icon} />
      </motion.div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.modal}
          >
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={modalHandler}
              className={classes['modal-container']}
            >
              <img
                className={classes.image}
                src={props.image}
                alt={props.title}
              />
              <div className={classes['title-container']}>
                <FontAwesomeIcon
                  className={classes['modal-icon']}
                  icon={props.icon}
                />
                <p className={classes.title}>{props.title}</p>
              </div>

              <p className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non felis tellus. Curabitur iaculis nibh eu eleifend pharetra.
                Nunc molestie est id ante facilisis bibendum. Donec egestas nibh
                eros, et dictum mi lacinia ultrices. Duis sodales dui purus.
                Vivamus porta aliquam magna, eget mattis arcu semper nec.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Icon;
