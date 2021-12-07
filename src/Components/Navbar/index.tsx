import React from 'react';
import Logo from '../../Logo.png';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div>Home</div>
        <div>About</div>
        <div className="h-100">
          <img src={Logo} alt="logo" className={classes.image} />
        </div>
        <div>Team</div>
        <div>Contact</div>
      </nav>
    </header>
  )
}

export default Navbar;