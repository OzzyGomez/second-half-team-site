import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <nav className={classes.nav}>
          <div>Home</div>
          <div>About</div>
          <div>Team</div>
          <div>Contact</div>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;