import React from 'react';
import { Greet } from './components/Greet';
import './App.css';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
function App() {
  return (
    <div className="App">
      <Greet name="Person" messageCount={20} isLoggedIn={true} />
      <Greet isLoggedIn={false} />
      <Person name={{first:"Ana",last:"Maria"}} />
      <PersonList names={[
        {first:"Louro",last:"José"},
        {first:"Stephen",last:"King"},
        {first:"George",last:"Orwell"}
      ]}/>
      <Status status='success' />
      <Heading>Text inside Heading JSX element</Heading>
      <Oscar>
        <Heading>Oscar goes to Mister Bean!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
