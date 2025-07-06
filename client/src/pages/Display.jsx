import React, { useEffect, useState } from 'react';
import { useDisplayWebSocket } from '../hooks/useWebsocket';
import styles from './Display.module.css';
import logo from '../../public/logo.png';

// Composant Display - Super propre !
export default function DisplayComponent() {
    const { isConnected, lastMessage } = useDisplayWebSocket();
    const [ping, setPing] = useState(false);
    const [gameState, setGameState] = useState({})
    const [revealedAnswers, setRevealedAnswers] = useState([]);

    useEffect(() => {
        if (lastMessage) {
            console.log('Remote reçu:', lastMessage);

            switch (lastMessage.type) {
                case 'PING':
                    setPing(true);
                    setTimeout(() => setPing(false), 4000);
                    break;
                case 'UPDATE_QUESTION':
                    setGameState(lastMessage.data);
                    break;
                case 'REVEAL_ANSWER':
                    setRevealedAnswers(prev => [...prev, lastMessage.data.answerId]);
                    break;


            }
        }
    }, [lastMessage]);

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} alt="" />
            </div>
            {ping && <p>Pong !</p>}
            <p>Status : {isConnected ? 'connected' : 'disconnected'}</p>
            <p className={styles.title}>Current Question: {gameState.question}</p>
            <p>Current Answers:</p>
            {gameState.answers && Object.entries(gameState.answers).map(([key, value]) => (
                <div key={key}>
                    <p> Answer {key}: </p><p className={revealedAnswers.includes(value.id) ? styles.shown : styles.hidden}> {value.text} - Votes: {value.votes}</p>
                </div>
            ))}
        </div>
    );
};
