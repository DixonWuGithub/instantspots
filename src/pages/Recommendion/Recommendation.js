import React, { useState, useEffect } from 'react';

function Recommendation ({ backupAskName, setBackUpAskName, ask, setAsk, sender, socket, name, id }) {

    const [message, setMessage] = useState('');
    const [display, setDisplay] = useState([]);
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
    
      const list = display?.map(comment => {
        return (<div className='comment-item'><div className="comment-text">{comment}</div></div>)
      })

    return(
        <>
        <div className='prompt' >What everyone's saying:</div>
        <div className='comment-container'>{list}</div>
        <form onSubmit={handleSubmit}>
          <input className="promptInput"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
  
          <button type="submit">Send</button>
  
        </form>
        </>
    )
}

export default Recommendation