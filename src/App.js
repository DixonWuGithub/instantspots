import './App.css';
import Chatbox from './components/Chatbox/Chatbox';
import Header from './components/Header/Header';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import {Link, Routes, Route, BrowserRouter} from 'react-router-dom'
import SignIn from './components/SignIn/SignIn';

function App() {
let signInModal
  let id = uuidv4()
  // let name = uuidv4()
  const [name, setName] = useState("")
  const [showSignIn, setShowSignIn] = useState(true)
  if(showSignIn){
    signInModal =<SignIn setName={setName} setShowSignIn={setShowSignIn}/>
  } else {
    signInModal=<></>
  }

  return (
    <div className="App">
      
      {signInModal}
      <Header userName={name}/>
      <div>Hi, {name}</div>
      <Chatbox id={id} name={name}/>
    </div>
  );
}

export default App;
