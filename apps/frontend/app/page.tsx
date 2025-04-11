"use client";
import { useContext } from "react";
import SocketContext from "@/context/socketContext";
import Image from "next/image";
import chessImage from "./chess.jpg";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
// import { authOptions } from "./api/auth/[...nextauth]/route";s

export default function Home() {
  //first check weather user is logged in or not,
  // if not then send them to login screen and then onwards setup WS connection to backend
  const [messages, userSocket] = useContext(SocketContext);
  console.log(messages, userSocket);
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log("session data");
  console.log(session);
  console.log("status");
  console.log(status);

  const initGame = () => {
    router.push("/random");
  };
  return (
    <div className="flex ">
      <div className="h-screen overflow-clip w-[800px]">
        <Image src={chessImage} width={800} alt="Chess Image" />
      </div>
      <div className="  w-[730px] flex  justify-center items-center">
        <button onClick={initGame} className="p-2 bg-slate-700">
          Play Game
        </button>
        {status === "authenticated" ? (
          <button onClick={() => signOut()} className="p-2 bg-slate-700">
            Sign Out
          </button>
        ) : (
          <button onClick={() => signIn()} className="p-2 bg-slate-700">
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
