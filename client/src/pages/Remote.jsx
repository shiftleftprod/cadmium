import { useWebSocket } from "../hooks/useWebsocket";


export default function Remote() {
    const { connected, gameState, sendMessage } = useWebSocket('remote');

    return (
        <div className="remote-container">
            <div className="connection-status">
                {connected ? '🟢 WS Connected' : '🔴 WS Disconnected'}
            </div>

            <h1>Mode Remote</h1>
            <button onClick={() => sendMessage({ type: 'PING' })}>next question</button>
        </div>
    );
};