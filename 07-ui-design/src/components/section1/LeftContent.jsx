import React from 'react'
import Arrow from './Arrow'
import MainText from './MainText'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='flex flex-col justify-between h-full w-1/3'>
    <MainText/>
    <Arrow/>
    </div>
  )
}

export default LeftContent
