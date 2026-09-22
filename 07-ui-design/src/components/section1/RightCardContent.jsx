import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
        <h2 className='rounded-full bg-white h-12 w-12 flex justify-center text-xl items-center font-semibold'>{props.id+1}</h2>
        <div className='font-semibold'>
            <p className='mb-14 text-white text-lg leading-relaxed'>{props.intro}</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-med px-8 py-2 rounded-full '>{props.tag}</button>
                <button className='bg-blue-600 text-white font-med px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
