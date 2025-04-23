"use client";

import { useEffect, useState } from "react";
import { signupHandler } from "../lib/actions";
import PopUp from "../components/Popup";

const Signup = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  useEffect(() => {
    if (!isModalOpen) {
      setMessage("");
    }
  }, [isModalOpen]);

  const signup = async (username: string, password: string) => {
    try {
      await signupHandler(username, password);
      setMessage("User created successfully!");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Error creating user!");
      setIsSuccess(false);
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="bg-[#161b22] h-screen w-full flex items-center justify-center">
        <div className="bg-[#0d1117] text-white rounded-xl px-[1.25rem] py-[2rem] flex flex-col my-[2rem]">
          <div className=" w-[368px] ">
            <div className="mb-[0.25rem] font-bold">Username</div>
            <input
              className="mb-[0.5rem] px-[1rem] py-[0.5rem]  w-full rounded-md bg-[#161b22] text-white border-2 border-[#30363d] focus:outline-none focus:border-[#bbb]"
              type="text"
              placeholder="Enter your Username..."
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="  w-[368px] ">
            <div className="mb-[0.25rem] font-bold">Password</div>
            <input
              className="mb-[0.5rem] px-[1rem] py-[0.5rem] w-full rounded-md bg-[#161b22] text-white border-2 border-[#30363d] focus:outline-none focus:border-[#bbb]"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className=" w-[368px] ">
            <button
              className="rounded-[0.5rem] px-[1rem] py-[0.75rem] hover:bg-[rgba(22,27,34,.8)] w-full text-[#ccc] border-[rgba(0,0,0,.1)]"
              onClick={() => signup(username, password)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>{" "}
      {isModalOpen ? (
        <PopUp
          setIsModalOpen={setIsModalOpen}
          message={message}
          isSuccess={isSuccess}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Signup;
