import React from 'react';
import Part from '../Parts';

const Exercises = ({ part1, part2, part3 } = this.props ) => {
  return(
    <div className="list-parts">
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

export default Exercises 