import './Card.css'

import React from 'react'

const Card = (props) => {
    const classes = 'card ' + props.className; // kiyu k card k andar or bhi compnents hain to un ke classes ko get kia ha.
  return (
    <div className={classes}>
        {props.children}  {/* Card tag k andar baki jitny comonents hain wo sabh children ma ajaty hain */}
    </div>
  )
}

export default Card



// ya sabh ham kar rhy hain q k css repeate ho rahi hoti hai,