import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <section className="container">
      <div className={classes.card}>
        <div className={classes.info}>
          <h1>Playing Games</h1>
          <h1>and Stuff</h1>
        </div>
        <div className={classes['image-container']}>
          <img src="https://via.placeholder.com/300x200" alt="about" className={classes.image} />
        </div>
      </div>
    </section>
  )
}

export default About;