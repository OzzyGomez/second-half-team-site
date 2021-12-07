import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import classes from './MemberCard.module.css';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

const MemberCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes['image-container']}>
        <img src="https://via.placeholder.com/300x300" alt="member" className={classes.image} />
      </div>
      <div className={classes.info}>
        <div className={classes.name}>Name</div>
        <div className={classes.title}>Stuff</div>
        <div style={{ flex: 1 }} />
        <div className={classes.icons}>
          <FontAwesomeIcon icon={faTwitch} size="2x" />
        </div>
      </div>
    </div>
  )
}

export default MemberCard;