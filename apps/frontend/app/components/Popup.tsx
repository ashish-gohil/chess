"use client";

import { useRouter } from "next/navigation";

interface PopUpArg {
  message: string;
  isSuccess: boolean;
  setIsModalOpen: (val: boolean) => void;
}

export default function PopUp({
  message,
  isSuccess,
  setIsModalOpen,
}: PopUpArg) {
  const router = useRouter();
  return (
    <div
      className={`absolute z-20 left-0 top-0  w-full h-screen flex justify-center items-center bg-[#161b22] bg-opacity-50`}
    >
      <div
        className={`w-1/2 ${isSuccess ? "bg-green-200" : "bg-red-200"} justify-center items-center flex flex-col  rounded-xl`}
      >
        <div className=" w-full h-2/3 p-2">
          <p>{message}</p>
        </div>
        <div />
        <div className="w-full flex justify-center items-center mt-3 mb-1">
          <button
            className="bg-blue-500 py-1 px-2 rounded-lg"
            onClick={() => {
              router.push("/");
              setIsModalOpen(false);
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
