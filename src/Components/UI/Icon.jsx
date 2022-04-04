import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

import classes from '../../Styles/Icon.module.css';
import Content from './Content';

const Icon = (props) => {
  const [modal, setModal] = useState(false);

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
            onClick={modalHandler}
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

              <div className={classes.content}>
                <Content content={props.content1} />
                <Content content={props.content2} />
                <Content content={props.content3} />
                <Content content={props.content4} />
                <Content content={props.content5} />
                <Content content={props.content6} />
                <Content content={props.content7} />
                <Content content={props.content8} />
                <Content content={props.content9} />
                <Content content={props.content10} />
                <Content content={props.content11} />
                <Content content={props.content12} />
                <Content content={props.content13} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Icon;
