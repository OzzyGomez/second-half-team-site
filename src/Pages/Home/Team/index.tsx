import React from 'react';
import MemberCard from './MemberCard';
import classes from './Team.module.css';

const Team = () => {
  return (
    <section className="container">
      <h1 className="text-center py-4">Team</h1>
      <div className={classes.members}>
        <div>
          <MemberCard />
        </div>
        <div>
          <MemberCard />
        </div>
        <div>
          <MemberCard />
        </div>
        <div>
          <MemberCard />
        </div>
        <div>
          <MemberCard />
        </div>
        <div>
          <MemberCard />
        </div>
        <div>
          <MemberCard />
        </div>
      </div>
    </section>
  )
}

export default Team;