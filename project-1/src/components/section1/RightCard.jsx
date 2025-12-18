import React from 'react'
import RightCardContent  from './RightCardContent'
function RightCard(props){
  return (
    <div className='relative w-70 h-full rounded-4xl overflow-hidden flex-shrink-0' >
      <img className='h-full w-full object-cover object-center rounded-4xl' src={props.image} alt="" />
    <RightCardContent tag={[props.tag]} />
    </div>
  )
}

export default RightCard
