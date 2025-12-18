import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div className='h-full w-3/4 overflow-x-auto p-6 flex flex-nowrap gap-10'>
    {
    props.users.map((elem)=>{
     return <RightCard image={elem.img} tag={elem.tag} />
    })}
    
    </div>
  )
}

export default RightContent
