import './App.css'
import UsernameInput from './components/UsernameInput';
import RoomManager from './components/RoomManager';
import PeerList from './components/PeerList';

function App() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-[400px] mx-auto my-8 flex flex-col gap-6">
        <UsernameInput />
        <RoomManager />
        <PeerList />
      </div>
    </main>
  );
}

export default App;
