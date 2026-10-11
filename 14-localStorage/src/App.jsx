import React from 'react'

const App = () => {
      // localStorage.setItem('user','bhumika'); // to set the item
      // localStorage.getItem('user');  // to get the item
      // localStorage.deleteItem('user');  // to delete a specific item
      // localStorage.clear(); // to clear the whole local storage

      const users = {
        username:'bhumika',
        age:20,
        city:'gurgaon'
      }

      localStorage.setItem('user',JSON.stringify(users));

  return (
    <div>
      
    </div>
  )
}

export default App
