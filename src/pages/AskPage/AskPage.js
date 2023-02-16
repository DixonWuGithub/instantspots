import "./AskPage.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AskPage({ ask, setAsk, sender, socket, name, id }) {
    const navigate = useNavigate()
    const handleAsk = (e) => {
        e.preventDefault();
        let joinMessage = { type: 'joinRoom', sender, roomName: ask };
        socket.send(JSON.stringify(joinMessage));
        navigate("/recommendation")
    }

    return (
        <>
            <div className='prompt' >Hi {name}, ask for a recommendation!</div>
            <form onSubmit={handleAsk}>
                <input className="promptInput" type="text"
                    value={ask}
                    onChange={(e) => setAsk(e.target.value)}
                />
                <button type="submit">Ask!</button>
            </form>
        </>
    )
}

export default AskPage