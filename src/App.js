import './App.css';
import Chatbox from './components/Chatbox/Chatbox';
import Header from './components/Header/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {

  let id = uuidv4()
  let name = uuidv4()

  return (
    <div className="App">
      <Header />
      <Chatbox id={id} name={name}/>
    </div>
  );
}

export default App;
