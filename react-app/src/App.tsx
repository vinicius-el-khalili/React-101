import React from 'react';
import { Greet } from './components/Greet';
import './App.css';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList'

function App() {
  return (
    <div className="App">
      <Greet name="Person" messageCount={20} isLoggedIn={false} />
      <Person name={{first:"Ana",last:"Maria"}} />
      <PersonList names={[
        {first:"Louro",last:"José"},
        {first:"Stephen",last:"King"},
        {first:"George",last:"Orwell"}
      ]}/>
    </div>
  );
}

export default App;
