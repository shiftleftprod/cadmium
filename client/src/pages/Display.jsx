import React, { useEffect, useState } from 'react';
import { useDisplayWebSocket } from '../hooks/useWebsocket';
import styles from './Display.module.css';
import logo from '../../public/logo.png';

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
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.background}>
                <p>FLAMIN'GOAT #9</p>
                <p>UNE COMMU EN OR</p>
                <p>FLAMIN'GOAT #9</p>
                <p>UNE COMMU EN OR</p>
                <p>FLAMIN'GOAT #9</p>
                <p>UNE COMMU EN OR</p>
            </div>
            {ping && <p>Pong !</p>}
            <p>Status : {isConnected ? 'connected' : 'disconnected'}</p>
            <div className={styles.title}>
                <p>{gameState.question}</p>
            </div>
            <div className={styles.answers}>
                {gameState.answers && Object.entries(gameState.answers).map(([key, value]) => (
                    <div key={key} className={styles.answer}>
                        <p> {key} </p><p> {revealedAnswers.includes(value.id) ? value.text : '. . . . . . . . . . .'} </p><p> {revealedAnswers.includes(value.id) ? value.votes : ' '} </p>
                    </div>
                ))}
            </div>
            <div className={styles.xd}>

            </div>
        </div>
    );
};
