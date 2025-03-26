"use client";
import useWebSocket from "@/customHooks/useWebsocket";

export default function Home() {
  const { messages, sendMessage } = useWebSocket("ws://localhost:8080");
  const initGame = () => {
    sendMessage(
      JSON.stringify({
        type: "init_game",
      })
    );
  };
  return (
    <div className="flex h-screen">
      <div className="bg-gray-700 w-[50%]">Image</div>
      <div className="w-[50%]">
        <button onClick={initGame}>Play Game</button>
      </div>
      <div>{messages}</div>
    </div>
  );
}
