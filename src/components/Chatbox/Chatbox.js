import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const WebSocket = window.WebSocket || window.MozWebSocket;


const Chatbox = ({id, name}) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState([]);

  const sender = { id: id, name: name };

  useEffect(() => {
    setSocket(new WebSocket('ws://localhost:8080'));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        console.log(event.data);
        setDisplay(JSON.parse(event.data))
      };
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.send(JSON.stringify( {sender, message : `${message}`}));
    setMessage('');
  };
  
  const list = display?.map(comment => {
    return (<div>{comment}</div>)
  }) 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
      <div>{list}</div>
    </form>
  );
};

export default Chatbox;