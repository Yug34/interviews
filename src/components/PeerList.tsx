import { useAppStore } from '../store/store';

const PeerList = () => {
  const peers = useAppStore((state) => state.peers);
  const user = useAppStore((state) => state.user);
  const room = useAppStore((state) => state.room);

  if (!user || !room) return null;

  return (
    <div>
      <h3>Connected Peers</h3>
      <ul>
        {peers.length === 0 && <li>No peers connected</li>}
        {peers.map((peer) => (
          <li key={peer}>{peer}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeerList; 