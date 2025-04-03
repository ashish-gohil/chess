"use client";
import { createContext } from "react";

const defaultSocket: [string[], null | WebSocket] = [[], null];

const SocketContext = createContext(defaultSocket);

export default SocketContext;
