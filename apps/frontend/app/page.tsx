"use client";
import { redirect } from "next/navigation";
import { useContext } from "react";
import SocketContext from "@/context/socketContext";

export default function Home() {
  const [messages, userSocket] = useContext(SocketContext);
  console.log(messages);
  console.log(userSocket);

  const initGame = () => {
    redirect("/random");
  };
  return (
    <div className="flex h-screen">
      <div className="bg-gray-700 w-[50%]">Image</div>
      <div className="w-[50%] flex  justify-center items-center">
        <button onClick={initGame} className="p-2 bg-slate-700">
          Play Game
        </button>
      </div>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
    </div>
  );
}
