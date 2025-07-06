import { useState, useEffect, useRef } from 'react';

export const useWebSocket = (clientType) => {
    const [connected, setConnected] = useState(false);
    const [gameState, setGameState] = useState({});
    const ws = useRef(null);

    useEffect(() => {
        if (ws.current) {
            ws.current.close()
        }
        const wsUrl = `ws://${window.location.hostname}:8080`;
        ws.current = new WebSocket(wsUrl);

        ws.current.onopen = () => {
            console.log('Connecté au serveur WebSocket');
            setConnected(true);

            // S'enregistrer auprès du serveur
            ws.current.send(JSON.stringify({
                type: 'REGISTER',
                clientType: clientType
            }));
        };

        ws.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Message reçu:', message);

            // Ici tu gères les messages reçus du serveur
            switch (message.type) {
                case 'TEST':
                    console.log('Message de test reçu:', message.data);
                    break;
                case 'PING':
                    console.log('Ping reçu, envoi de PONG');
                    break;

                default:
                    console.log('Message non-reconnu:', message);
            }
        };

        ws.current.onclose = () => {
            console.log('Connexion fermée');
            setConnected(false);
        };

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [clientType]);

    const sendMessage = (message) => {
        console.log('Sending message:', message);
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        }
    };

    return {
        connected,
        gameState,
        sendMessage
    };
};