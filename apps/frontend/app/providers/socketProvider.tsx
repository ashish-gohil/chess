"use client";
import SocketContext from "@/context/socketContext";
import useWebSocket from "@/customHooks/useWebsocket";

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { messages, userSocket } = useWebSocket("ws://localhost:8080");
  return (
    <SocketContext.Provider value={[messages, userSocket]}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
