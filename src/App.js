import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';

function App() {
  const[content,setContent]=useState('Home');

  return (
    <div className="App" style={{paddingTop:52}}>
      <NavBar content={content} setContent={setContent}/>
      <Main content={content}/>
    </div>
  );
}

export default App;
