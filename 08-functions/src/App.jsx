import React from 'react'

const App = () => {
  function value(val) {
    console.log(val);
  }
  const pageScrolling = (elem) => {
    console.log(elem);
  }
  function btn() {
    console.log('hello');
  }
  return (
    <div>
      <input type="text" placeholder="enter name" onChange={(e) => {
        value(e.target.value);
      }}/>
      <button className='p-8 h-5 w-10 border-2 m-5 items-center flex justify-center' onClick={btn}>click</button>
      <div className='box' onMouseMove={(e)=>{
        console.log('nacho',e.clientX,e.clientY);
      }}></div>
      <div onWheel={(e)=>{
        pageScrolling(e.deltaY);
      }}>
        <div className="page1"></div>
         <div className="page2"></div>
          <div className="page3"></div>
      </div>
    </div>
  )
}

export default App
