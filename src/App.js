import './App.scss';
import Header from './components/Header/Header';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from './components/SignIn/SignIn';
import AskPage from './pages/AskPage/AskPage';
import RequestBoard from './pages/RequestsBoard/RequestsBoard';
import Recommendation from './pages/Recommendion/Recommendation';

function App() {
  let signInModal
  let id = uuidv4()
  const WebSocket = window.WebSocket || window.MozWebSocket;

  const [socket, setSocket] = useState(null);
  useEffect(() => {
    setSocket(new WebSocket('ws://localhost:8080'));
  }, []);


  const [name, setName] = useState("")
  const [showSignIn, setShowSignIn] = useState(true)
  const [ask, setAsk] = useState('');
  const [backupAskName, setBackUpAskName] = useState("")
  const sender = { id: id, name: name };

  if (showSignIn) {
    signInModal = <SignIn setName={setName} setShowSignIn={setShowSignIn} />
  } else {
    signInModal = <></>
  }

  return (
    <div className="App">

      {signInModal}
      <BrowserRouter>
        <Header userName={name} />
        <Routes>
          <Route path="/" element={<AskPage backupAskName={backupAskName} setBackUpAskName={setBackUpAskName} ask={ask} setAsk={setAsk} sender={sender} socket={socket} id={id} name={name} />} />
          <Route path="/recommendations" element={<RequestBoard backupAskName={backupAskName} setBackUpAskName={setBackUpAskName} ask={ask} setAsk={setAsk} sender={sender} socket={socket} id={id} name={name} />} />
          <Route path="/recommendation" element={<Recommendation backupAskName={backupAskName} setBackUpAskName={setBackUpAskName} ask={ask} setAsk={setAsk} sender={sender} socket={socket} id={id} name={name} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
