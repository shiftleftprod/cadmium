import React, { useEffect, useState } from 'react';
import { useRemoteWebSocket } from '../hooks/useWebsocket';
import styles from './Remote.module.css';

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
            <p>Status : {isConnected ? 'connected' : 'disconnected'} ({`ws://${window.location.hostname}:8080`})</p>
            <button onClick={() => handlePrintState()}>[DEBUG] Print state</button>
            <button onClick={() => sendMessage({ type: 'PING', data: {} })}>[DEBUG] Send Ping</button>
            <div className={styles.start}>
                {!startWarning && <button onClick={() => setStartWarning(true)}>Démarrer la partie</button>}
                {startWarning && <button disabled={startDisabled} onClick={() => handleStartGame()}>{startDisabled ? 'Sur.e ? (4s)' : 'Démarrer'}</button>}
            </div>
            <div className={styles.scores}>
                <button onClick={() => sendMessage({ type: "ADD_SCORE", data: { uteam: "TLS", uamount: 1 } })}>TLS + 1</button>
                <button onClick={() => sendMessage({ type: "REMOVE_SCORE", data: { dteam: "TLS", damount: 1 } })}>TLS - 1</button>
                <br />
                <button onClick={() => sendMessage({ type: "ADD_SCORE", data: { uteam: "TLS", uamount: 5 } })}>TLS + 5</button>
                <button onClick={() => sendMessage({ type: "REMOVE_SCORE", data: { dteam: "TLS", damount: 5 } })}>TLS - 5</button>
                <br /><br />
                <button onClick={() => sendMessage({ type: "ADD_SCORE", data: { uteam: "SAL", uamount: 1 } })}>SAL + 1</button>
                <button onClick={() => sendMessage({ type: "REMOVE_SCORE", data: { dteam: "SAL", damount: 1 } })}>SAL - 1</button>
                <br />
                <button onClick={() => sendMessage({ type: "ADD_SCORE", data: { uteam: "SAL", uamount: 5 } })}>SAL + 5</button>
                <button onClick={() => sendMessage({ type: "REMOVE_SCORE", data: { dteam: "SAL", damount: 5 } })}>SAL - 5</button>
            </div>
            <br />
            <button onClick={() => sendMessage({ type: 'NEXT_QUESTION', data: {} })}>Question suivante</button>
            <p>Question {gameState.id}: {gameState.question}</p>
            <p>Réponses :</p>
            {gameState.answers && Object.entries(gameState.answers).map(([key, value]) => (
                <div className={styles.answer} key={key}>
                    <p>{key}: {value.text} - Votes: {value.votes}</p>
                    <button onClick={() => handleReveal(value.id)} >Révéler</button>
                </div>
            ))}
        </div>
    );
};
