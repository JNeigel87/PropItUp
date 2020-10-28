import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard LastName="Wick" FirstName="John" Age ={37} HairColor= "Black" />
      <PersonCard LastName="Cage" FirstName="Luke" Age ={45} HairColor= "Brown" />
      <PersonCard LastName="Von Lichtenstein" FirstName="Ulrich" Age ={38} HairColor= "Blonde" />
      <PersonCard LastName="Rose" FirstName="Lily" Age ={28} HairColor= "Red" />
    </div>
  );
}

export default App;
