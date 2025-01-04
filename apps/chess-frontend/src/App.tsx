function App() {
  const handlePlayEvent = () => {
    const socket = new WebSocket("ws://localhost:8080");
    console.log(socket);
  };
  return (
    <div>
      <p>Click to play</p>
      <button onClick={handlePlayEvent}>Play</button>
    </div>
  );
}

export default App;
