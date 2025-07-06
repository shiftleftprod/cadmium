import { useState, useEffect, useRef } from 'react';

// Hook de base générique
const useWebSocketBase = (url, clientType) => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [lastMessage, setLastMessage] = useState(null);
    const socketRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket(url);
        socketRef.current = ws;
        setSocket(ws);

        ws.onopen = () => {
            console.log(`WebSocket connecté (${clientType})`);
            setIsConnected(true);

            // S'enregistrer auprès du serveur
            ws.send(JSON.stringify({
                type: 'REGISTER',
                clientType: clientType
            }));
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setLastMessage(message);
        };

        ws.onclose = () => {
            console.log(`WebSocket déconnecté (${clientType})`);
            setIsConnected(false);
        };

        ws.onerror = (error) => {
            console.error(`Erreur WebSocket (${clientType}):`, error);
        };

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, [url, clientType]);

    const sendMessage = (message) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
        }
    };

    return {
        socket,
        isConnected,
        lastMessage,
        sendMessage,
        clientType
    };
};

// Hook spécifique pour les DISPLAYS
export const useDisplayWebSocket = (url = `ws://${window.location.hostname}:8080`) => {
    const { isConnected, lastMessage, sendMessage } = useWebSocketBase(url, 'display');

    return {
        isConnected,
        lastMessage,
        sendMessage,
    };
};

// Hook spécifique pour les REMOTES
export const useRemoteWebSocket = (url = `ws://${window.location.hostname}:8080`) => {
    const { isConnected, lastMessage, sendMessage } = useWebSocketBase(url, 'remote');

    return {
        isConnected,
        lastMessage,
        sendMessage,
    };
};