import React from 'react';

const Part = ({part} = this.props) => {
  return(
    <div className="item-part">
      <h4>{part.name} <small>{part.exercises}</small></h4>
    </div>
  )
}

export default Part;