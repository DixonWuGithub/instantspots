import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const WebSocket = window.WebSocket || window.MozWebSocket;


const Chatbox = ({ id, name }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState([]);
  const [ask, setAsk] = useState('');

  const sender = { id: id, name: name };

  useEffect(() => {
    setSocket(new WebSocket('ws://localhost:8080'));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        let e = JSON.parse(event.data)
        console.log(e);
        switch (e.type) {
          case 'newMessage':
            console.log(`Received a new message: ${e.message}`);
            setDisplay(e.message);
            break;
          default:
            console.log(`Received unknown message type: ${event.data.type}`);
        }
      };
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.send(JSON.stringify({ type: 'sendMessage', roomName: ask, sender, message: `${message}` }));
    setMessage('');
  };

  const handleAsk = (e) => {
    e.preventDefault();
    let joinMessage = { type: 'joinRoom', sender, roomName: ask };
    socket.send(JSON.stringify(joinMessage));
  }

  const list = display?.map(comment => {
    return (<div>{comment}</div>)
  })

  return (
    <>
      <div>{list}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send</button>

      </form>
      <form onSubmit={handleAsk}>
        <input type="text"
          value={ask}
          onChange={(e) => setAsk(e.target.value)}
        />
        <button type="submit">Ask!</button>
      </form>


    </>
  );
};

export default Chatbox;