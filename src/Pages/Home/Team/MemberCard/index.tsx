import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import classes from './MemberCard.module.css';
import { faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Member, MemberLink } from '../Members';
import clsx from 'clsx';

interface MemberCardProps {
  member: Member;
}

interface IconLinkProps {
  link: MemberLink;
}

const IconLink: FC<IconLinkProps> = ({ link }) => {
    switch(link.type) {
      case 'twitch': 
        return (
          <a href={link.url} target="_blank" rel="noreferrer" className={classes.link}>
            <FontAwesomeIcon icon={faTwitch} size="2x" className={classes.icon} />
          </a>
        )
      case 'youtube':
        return (
          <a href={link.url} target="_blank" rel="noreferrer" className={classes.link}>
            <FontAwesomeIcon icon={faYoutube} size="2x" className={classes.icon} />
          </a>
        )
      default:
        return null;
    }
}

const MemberCard: FC<MemberCardProps> = ({ member }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div className={classes['root']}>
      <div
        ref={ref}
        className={clsx(classes.card)}
      >
        <div className={classes['image-container']}>
          <img src={member.image} alt="member" className={classes.image} />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{member.name}</div>
          <div className={classes.title}>{member.title}</div>
          <div style={{ flex: 1 }} />
          <div className={classes.icons}>
            {member.links && member.links.map(link => 
              <IconLink key={link.type} link={link} />  
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;