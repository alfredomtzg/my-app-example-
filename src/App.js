import React from 'react';
import ContactCard from './ContactCard';


const App = () => {
  const contacts = [
    {
      name: "Jenny Han", 
      email: "jenni.han@notreal.com", 
      age: 40, 
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      name: "John Cena", 
      email: "John@notreal.com", 
      age: 25, 
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Alfredo Martinez", 
      email: "psialfredomtz@gmail.com", 
      age: 28, 
      avatarUrl: "https://via.placeholder.com/150"
    }
  ]
  return(
    <div>
      <ContactCard name = "Jenny Han" email="jenni.han@notreal.com" age={25} avatarUrl="https://via.placeholder.com/150"/>
      <ContactCard name = "John Cena" email="John@notreal.com" age={28} avatarUrl="https://via.placeholder.com/150"/>
      <ContactCard name = "Alfredo Martinez" email="Alfredo@notreal.com" age={30} avatarUrl="https://via.placeholder.com/150"/>
    </div>
  )
}
export default App