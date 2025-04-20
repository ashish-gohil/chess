"use client";

import React, { useContext, useEffect, useState } from "react";
import { Chess, Square } from "chess.js";
import SocketContext from "@/context/socketContext";
import {
  CHECK,
  CHECKMATE,
  GAME_JOINED,
  INVALID_MOVE,
  MOVE_SUCCESS,
  STALEMATE,
  WHITE_USER,
} from "@/message";
const chess = new Chess();
const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];

const pieceUnicode: Record<string, string> = {
  p: "♟",
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  P: "♙",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
};

export default function ChessBoard() {
  const [board, setBoard] = useState(chess.board());
  const [selected, setSelected] = useState<Square | null>(null);
  const [userType, setUserType] = useState<string>("w");
  console.log(board);
  const [messages, userSocket] = useContext(SocketContext);
  console.log("below are messages from chessboard");
  console.log(messages);

  useEffect(() => {
    if (messages) {
      const msgObj = JSON.parse(messages);
      if (msgObj.type === GAME_JOINED) {
        setUserType(msgObj?.payload?.userType);
      } else if (msgObj.type === MOVE_SUCCESS) {
        chess.load(msgObj?.payload?.fen);
        setBoard(chess.board());
      } else if (msgObj.type === INVALID_MOVE) {
        alert("Invalid move");
      } else if (msgObj.type === CHECK) {
        alert("King is on Check");
        chess.load(msgObj?.payload?.fen);
        setBoard(chess.board());
      } else if (msgObj.type === STALEMATE) {
        alert("Game is stalemate/draw");
        chess.load(msgObj?.payload?.fen);
        setBoard(chess.board());
      } else if (msgObj.type === CHECKMATE) {
        alert("Checkmate");
        chess.load(msgObj?.payload?.fen);
        setBoard(chess.board());
      }
    }
  }, [messages]);

  const handleSquareClick = (square: Square) => {
    if (selected) {
      try {
        const moveObj = {
          type: "move",
          from: selected,
          to: square,
          promotion: "q",
        };
        userSocket?.send(JSON.stringify(moveObj));

        setBoard(chess.board());
        setSelected(null);
        // Check for game state
        if (chess.isCheckmate()) {
          alert("Checkmate!");
        } else if (chess.isCheck()) {
          alert("Check!");
        }
      } catch (err) {
        console.log(err);
        setSelected(null); // Invalid move
      }
    } else {
      const piece = chess.get(square);
      console.log(piece);
      console.log(piece?.color);
      console.log(chess.turn());
      console.log(userType);
      if (piece && piece.color === chess.turn() && userType === piece.color) {
        setSelected(square);
      }
    }
  };

  const getSquareColor = (fileIndex: number, rankIndex: number) => {
    return (fileIndex + rankIndex) % 2 === 0 ? "bg-[#f0d9b5]" : "bg-[#b58863]";
  };

  const isWhite = userType === WHITE_USER;
  const displayRanks = isWhite ? ranks : [...ranks].reverse();
  const displayFiles = isWhite ? files : [...files].reverse();

  return (
    <div className="w-full max-w-[540px] aspect-square grid grid-cols-8 border-2 border-black">
      {displayRanks.map((rank, rankIdx) =>
        displayFiles.map((file, fileIdx) => {
          const square = (file + rank) as Square;
          const piece = chess.get(square);
          const isSelected = square === selected;

          return (
            <div
              key={square}
              onClick={() => handleSquareClick(square)}
              className={`${getSquareColor(fileIdx, rankIdx)} flex relative items-center aspect-square justify-center text-2xl cursor-pointer select-none ${
                isSelected ? "ring-4 ring-yellow-400" : ""
              }`}
            >
              {/* Piece in center */}
              <div>
                {piece
                  ? pieceUnicode[
                      piece.color === "w"
                        ? piece.type.toUpperCase()
                        : piece.type
                    ]
                  : ""}
              </div>

              {/* Square name in top-right corner */}
              <div className="font-light text-[10px] text-slate-600 absolute top-0 right-0 p-1">
                {square}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
