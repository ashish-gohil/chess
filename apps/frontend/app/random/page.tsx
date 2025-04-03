"use client";
import SocketContext from "@/context/socketContext";
import { useContext, useEffect } from "react";

const RandomGame = () => {
  const [messages, userSocket] = useContext(SocketContext);
  useEffect(() => {
    userSocket?.send(
      JSON.stringify({
        type: "init_game",
      })
    );
  }, [userSocket]);
  console.log(messages);
  return (
    <div>
      <div>Random Game Page</div>
      {messages.map((msg, idx) => (
        <div key={idx}>{msg.toString()}</div>
      ))}
    </div>
  );
};
export default RandomGame;
