"use client";
import { createContext } from "react";

const defaultSocket: [string | null, null | WebSocket] = [null, null];

const SocketContext = createContext(defaultSocket);

export default SocketContext;
