import React from 'react'
import RightCard from './RightCard'
import 'remixicon/fonts/remixicon.css'

const RightContent = (props) => {
  return (
    <div id='right' className='gap-10 flex h-full flex-nowarp p-6 w-2/3 overflow-x-auto rounded-4xl'>
      {props.users.map(function(element,idx){
        return <RightCard id={idx} key={idx} img={element.img} tag={element.tag} intro={element.intro}/>
      })}
    </div>
  )
}

export default RightContent
