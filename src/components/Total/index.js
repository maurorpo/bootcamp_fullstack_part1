import React from 'react';

const Total = ({ exercises1, exercises2, exercises3 } = this.props) => {
  return(
    <div className="total-content">
      {exercises1 + exercises2 + exercises3}
    </div>
  )
}

export default Total;