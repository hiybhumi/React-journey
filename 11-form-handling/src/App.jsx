import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input className='border-2 p-5 m-3 text-2xl' type="text" placeholder='enter your name'/>
        <button className='border-2 p-5 m-3 text-2xl bg-gray-300'>Submit</button>
      </form>
    </div>
  )
}

export default App
