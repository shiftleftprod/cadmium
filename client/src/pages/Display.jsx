import { useWebSocket } from "../hooks/useWebsocket";

export default function Display() {
    const { connected, gameState, sendMessage } = useWebSocket('display');

    return (
        <div className="display-container">
            <div className="connection-status">
                {connected ? '🟢 WS Connected' : '🔴 WS Disconnected'}
            </div>

            <h1>Mode Display</h1>
            {/* Ton interface de display ici */}
        </div>
    );
};
