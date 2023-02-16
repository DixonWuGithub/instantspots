import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function RequestBoard({ backupAskName, setBackUpAskName, ask, setAsk, sender, socket, name, id }) {
    const navigate = useNavigate()
    const [roomList, setRoomList] = useState([])

    useEffect(() => {
        socket.send(JSON.stringify({ type: 'getRooms', sender }));
    }, [])

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                let e = JSON.parse(event.data)
                console.log(e);
                switch (e.type) {
                    case 'rooms':
                        console.log(`Received a new message: ${e.message}`);
                        setRoomList(e.message);
                        break;
                    default:
                        console.log(`Received unknown message type: ${event.data.type}`);
                }
            };
        }
    }, [socket]);



    const joinAsk = (e) => {
        e.preventDefault();
        setAsk(e.target.innerText)
        let joinMessage = { type: 'joinRoom', sender, roomName: e.target.innerText };
        socket.send(JSON.stringify(joinMessage));
        navigate("/recommendation")
    }


    const rooms = roomList?.map((room) => {
        return (<div className='roombutton' onClick={joinAsk}>{room.name}</div>)
    })

    console.log(roomList)

    return (
        <>
            <div className='prompt'>Here are what others are asking right now, give them your valued opinion!</div>
            {rooms}
        </>
    )
}

export default RequestBoard