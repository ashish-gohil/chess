"use client";
import SocketContext from "@/context/socketContext";
import { useContext, useEffect } from "react";
import ChessBoard from "../components/ChessBoard";

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
    <div className="flex w-full">
      <div className="w-[70%] flex justify-center items-center min-h-screen bg-gray-100">
        <ChessBoard />
      </div>
      <div>Play button/moves</div>
    </div>
  );
};
export default RandomGame;
