import React from 'react'

const Card = (props) => {

    console.log(props);
  return (

    <>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1778336259903-90ca56d98dab?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellat.</p>
        <button>click me</button>
      </div>
    </>
  )
}

export default Card
