import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur, accusantium facere possimus cumque enim! Repudiandae, dolorem!',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla assumenda eveniet.',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ipsam eum mollitia eos, facere non.',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1730717649700-d363f064efb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
      intro:'Lorem ipsum dolor, numquam delectus. Voluptates est perferendis sapiente ullam tempore nam.',
      tag:'Overserved'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
