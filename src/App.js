import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';


const App = () => {
  const [results, setResults] = useState([]);

  useEffect( () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      setResults(data.results)
    })
    .catch(err => {console.log(err);})
  },[]);

  

  return(
    <div>
      {results.map((result, index) => {
        return(
          <ContactCard key={index}
          name = {result.name.first} 
          lastName= {result.name.last}
          email= {result.email} 
          age= {result.dob.age} 
          avatarUrl= {result.picture.large}/>
        )
      })}
    </div>
  )
}
export default App