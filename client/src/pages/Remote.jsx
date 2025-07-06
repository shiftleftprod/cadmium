import React, { useEffect, useState } from 'react';
import { useRemoteWebSocket } from '../hooks/useWebsocket';

// Composant Remote - Super propre aussi !
export default function RemoteComponent() {
    const { isConnected, lastMessage, sendMessage } = useRemoteWebSocket();
    const [gameState, setGameState] = useState({});
    const [ping, setPing] = useState(false);

    const [startWarning, setStartWarning] = useState(false);
    const [startDisabled, setStartDisabled] = useState(true);

    useEffect(() => {
        if (lastMessage) {
            console.log('Remote reçu:', lastMessage);

            switch (lastMessage.type) {
                case 'PING':
                    setPing(true);
                    setTimeout(() => setPing(false), 2000);
                    break;
                case 'UPDATE_QUESTION':
                    setGameState(lastMessage.data)
                    break;

            }
        }
    }, [lastMessage]);

    useEffect(() => {
        setStartDisabled(true)
        setTimeout(() => setStartDisabled(false), 4000);
    }, [startWarning])

    function handleStartGame() {
        sendMessage({ type: 'START_GAME', data: {} })
        setStartWarning(false)
        setStartDisabled(true)
    }

    function handlePrintState() {
        console.log(startDisabled)
    }

    function handleReveal(answerId) {
        sendMessage({ type: 'REVEAL_ANSWER', data: { answerId } });
    }

    return (
        <div>
            <p>Status : {isConnected ? 'connected' : 'disconnected'}</p>
            <button onClick={() => handlePrintState()}>[DEBUG] Print state</button>
            <button onClick={() => sendMessage({ type: 'PING', data: {} })}>[DEBUG] Send Ping</button>
            <div>
                {!startWarning && <button onClick={() => setStartWarning(true)}>Start game</button>}
                {startWarning && <button disabled={startDisabled} onClick={() => handleStartGame()}>{startDisabled ? 'Sure ? (Wait 4s)' : 'Confirm'}</button>}
            </div>
            <button onClick={() => sendMessage({ type: 'NEXT_QUESTION', data: {} })}>Next Question</button>
            <p>Current Question : {gameState.question}</p>
            <p>Current Answers :</p>
            {gameState.answers && Object.entries(gameState.answers).map(([key, value]) => (
                <div key={key}>
                    <p>Answer {key}: {value.text} - Votes: {value.votes}</p>
                    <button onClick={() => handleReveal(value.id)} >Reveal</button>
                </div>
            ))}
        </div>
    );
};
