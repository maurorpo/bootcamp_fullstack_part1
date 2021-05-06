import React from 'react';

const Part = ({part, numberExersices} = this.props) => {
  return(
    <div className="item-part">
      <h4>{part} <small>{numberExersices}</small></h4>
    </div>
  )
}

export default Part;