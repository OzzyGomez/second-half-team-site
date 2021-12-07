import clsx from 'clsx';
import React from 'react';
import Navbar from '../../Components/Navbar';
import Logo from '../../Logo.png';
import About from './About';
import Contact from './Contact';
import classes from './Home.module.css';
import Team from './Team';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.banner}>
        <img src={Logo} alt="logo" className={classes.image} />
      </div>
      <div className={classes.section}>
        <About />
      </div>
      <div className={clsx(classes.section, 'bg-gray')}>
        <Team />
      </div>
      <div className={classes.section}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;