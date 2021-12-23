import React from 'react';
import MemberCard from './MemberCard';
import classes from './Team.module.css';
import Members from './Members';

const Team = () => {
  Members.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  return (
    <section className="container">
      <div className={classes.members}>
        {Members.map(member => 
          <div key={member.name}>
            <MemberCard member={member} />
          </div>
          )}
      </div>
    </section>
  )
}

export default Team;