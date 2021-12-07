import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo.png';
import classes from './Navbar.module.css';

interface NavbarProps {
  showLogo?: boolean;
  backgroundColor?: string;
}

const Navbar: FC<NavbarProps> = ({ 
  showLogo = true, 
  backgroundColor = 'rgba(0,0,0,0.12)'
}) => {
  return (
    <header className={classes.header} style={{ backgroundColor }}>
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/" className={classes['image-container']}>
          {showLogo && (
            <img src={Logo} alt="logo" className={classes.image} />
          )}
        </Link>
        <Link to="/">Team</Link>
        <Link to="/">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar;