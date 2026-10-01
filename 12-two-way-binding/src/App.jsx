import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted by',title);

    setTitle('');
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input className='border-2 p-5 m-3 text-2xl' type="text" placeholder='enter your name' onChange={(e) => {
          setTitle(e.target.value);
        }} value={title}/>
        <button className='border-2 p-5 m-3 text-2xl bg-gray-300'>Submit</button>
      </form>
    </div>
  )
}
export default App
