import React from 'react';

const Total = ({ total1, total2, total3 } = this.props) => {
  return(
    <div className="total-content">
      { total1 + total2 + total3 }
    </div>
  )
}

export default Total;