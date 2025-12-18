import React from 'react'

const RightCardContent  = (props) => {
  return (
    <div className='absolute top-0 left-0  w-full h-full flex flex-col justify-between p-6'>
          <h2 className='bg-white h-10 w-10 flex justify-center items-center rounded-full font-semibold'>1</h2>
           <div>
            <p className='text-lg leading-normal mb-12 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores mollitia doloribus!</p>
            <div className='flex justify-center gap-3 items-center'>
              <button className='bg-blue-500  py-1 px-6 rounded-full text-white text-xs'>{props.tag}</button>
              <button className='bg-blue-500  py-1 px-2 rounded-full text-white text-xs '><i class="ri-arrow-right-line"></i></button>
            </div>
           </div>
      </div>
  )
}

export default RightCardContent 
