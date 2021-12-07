import React from 'react';
import classes from './Highlights.module.css';

const Highlights = () => {
  return (
    <section className={classes.section}>
      <div className="container">
        <img 
          src="https://via.placeholder.com/300x200" 
          alt="banner" 
          style={{ width: '100%', height: 500, objectFit: 'contain' }}
        />
      </div>
    </section>
  )
}

export default Highlights;