import React, { useState, useSyncExternalStore } from 'react'

const App = () => {
   const [num,setNum] = useState(0);
   const [userName,setUserName] = useState("bhumi");
   const [users, setusers] = useState([10,20,30]);

   const [inc, setinc] = useState(0);
   function change() {
    setNum(30);
    setUserName("bishu");
   }
  function increment() {
    setinc(inc+1);
  }
  function decrement() {
    setinc(inc-1);
  }
  function incby5() {
    setinc(inc+5);
  }
  function multby3() {
    setinc(inc*3);
  }
  function reset() {
    setinc(0);
  }
  return (
    
    <div>
      <h1 className='text-3xl  m-5'>value of num is {num} <br/> value of username is {userName}</h1>
      <button className='text-2xl border-2 m-10 p-5 bg-gray-400' onClick={change}> click </button>

      <div className='text-2xl m-10'>
        <h1>Number = {inc}</h1>
        <button onClick={increment} className='border-2 px-3 py-5 mb-3 mt-3 rounded-md bg-gray-400'>Increase by 1</button>
        <button onClick={decrement} className='border-2 px-3 py-5 mb-3 mt-3 bg-gray-400 rounded-md'>Decrease by 1</button><br/>
        <button onClick={incby5} className='border-2 px-3 py-5 mb-3 mt-3 bg-gray-400 rounded-md'>Increase by 5</button>
         <button onClick={multby3} className='border-2 px-3 py-5 mb-3 mt-3 bg-gray-400 rounded-md'>Multiply by 3</button> <br/>
          <button onClick={reset} className='border-2 px-3 py-5 mb-3 mt-3 mx-26 bg-gray-400 rounded-md'>Reset to 0</button><br/>

      </div>
    </div>
  )
}

export default App
