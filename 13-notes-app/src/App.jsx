import React,{ useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler =(e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    console.log(copyTask);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
     const copyTask = [...task];
     copyTask.splice(idx,1);
     setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form className='flex p-10 gap-4 items-start flex-col lg:w-1/2' 
      onSubmit={(e) => {submitHandler(e)}}>

      <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input 
          type='text' 
          placeholder='Enter the title' 
          className='py-2 px-5 border-2 rounded h-10 w-full outline-none font-medium'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          />

        <textarea 
        type='text' 
        placeholder='Write details here' 
        className='py-2 px-5 border-2 rounded h-30 w-full  outline-none font-medium'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        />

        <button 
        className='bg-white text-black px-5 py-2 rounded w-full outline-none font-medium active:bg-gray-300'
        >Add Note</button>
      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-10 mt-5 overflow-auto items-start justify-start'>
          {task.map(function(elem,idx) {

            return <div key={idx} className='flex justify-between flex-col items-start relative h-50 w-40 rounded-2xl bg-white text-black pb-4 pt-4 px-4'>
              <div className=''>
              <h2 className='leadin-tight text-xl font-bold'>{elem.title}</h2>
              <p className='mt-2 font-medium leading-tight text-gray-700'>{elem.details}</p>
              </div>
               <button onClick={() => deleteNote(idx)} className='w-full bg-red-500 py-1 rounded text-xs font-bold text-white cursor-pointer active:scale-95'>Delete</button>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
