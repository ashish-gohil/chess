"use client";
import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<string | null>(null);
  const [userSocket, setUserSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);
    setUserSocket(socket);

    socket.onmessage = (event) => {
      setMessages(event.data);
    };
    socket.onerror = (ev: Event) => {
      console.log(ev);
    };

    return () => {
      socket.close();
    };
  }, [url]);

  // const sendMessage = (message: string) => {
  //   if (ws) {
  //     ws.send(message);
  //   }
  // };

  return { messages, userSocket };
};

export default useWebSocket;
