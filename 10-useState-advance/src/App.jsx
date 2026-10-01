import React,{ useState } from 'react'

const App = () => {
  const [first, setfirst] = useState({user:"bhumi",age:20});
  const [num, setnum] = useState([10,20,30]);
  function btnClicked() {
    const newNum = {...first};
    newNum.user = "bishu";
    setfirst(newNum);
    console.log(newNum);

    // const newArr = [...num];
    // newArr.pop();
    // setnum(newArr);
    // console.log(newArr);
    setnum(prev => [40,50,60]);
  }
  return (
    <div className='text-2xl m-10'>
      <h1>{first.user} , {first.age}</h1>
      <button onClick={btnClicked} className='border-2'>click</button><br/>
      <h1>{num}</h1>
    </div>
  )
}

export default App
