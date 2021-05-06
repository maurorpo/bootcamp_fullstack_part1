import React from 'react';
import Part from '../Parts';

const Exercises = ({ part1, numberExersices1, part2, numberExersices2, part3, numberExersices3} = this.props ) => {
  return(
    <div className="list-parts">
      <Part part={part1} numberExersices={numberExersices1} />
      <Part part={part2} numberExersices={numberExersices2} />
      <Part part={part3} numberExersices={numberExersices3} />
    </div>
  )
}

export default Exercises 