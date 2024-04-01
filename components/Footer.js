"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useChat } from "ai/react";

export const runtime = "edge";

export default function Footer() {
  const [isFinderOpen, setFinderOpen] = useState(false);
  const [isTerminalOpen, setTerminalOpen] = useState(false);

  const openFinder = () => {
    setFinderOpen(true);
  };

  const openTerminal = () => {
    setTerminalOpen(true);
  };

  const closeFinder = () => {
    setFinderOpen(false);
  };

  const closeTerminal = () => {
    setTerminalOpen(false);
  };

  return (
    <footer className="fixed bottom-1 flex justify-between items-center bg-blue-300 bg-opacity-50 rounded-xl py-1 px-1">
      <div className="flex items-center">
        <Image
          src="/finder.png"
          width={50}
          height={50}
          alt="Finder Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4 cursor-pointer"
          onClick={openFinder}
        />
        {isFinderOpen && <FinderModal closeModal={closeFinder} />}
        <Image
          src="/terminal.png"
          width={45}
          height={38}
          alt="Settings Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4"
          onClick={openTerminal}
        />
        {isTerminalOpen && <TerminalModal closeTerminal={closeTerminal} />}
        <Image
          src="/settings.png"
          width={45}
          height={38}
          alt="Settings Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4"
        />
        <Image
          src="/mail.webp"
          width={50}
          height={50}
          alt="Mail Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4"
        />
        <Image
          src="/maps.png"
          width={50}
          height={50}
          alt="Maps Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4"
        />
      </div>
      <hr className="border border-gray-500 h-9 mx-2" />
      <div className="flex items-center">
        <Image
          src="/store.png"
          width={50}
          height={50}
          alt="Store Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4"
        />
        <Image
          src="/trashcan.png"
          width={35}
          height={40}
          alt="Trash Can Icon"
          className="transition duration-500 hover:scale-110 hover:-translate-y-4"
        />
      </div>
    </footer>
  );
}

const FinderModal = ({ closeModal }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white shadow-lg rounded-lg w-96 h-64 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        </div>
        <button
          onClick={closeModal}
          className="text-gray-500 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 10l4.147-4.146a.5.5 0 1 0-.708-.708L12 9.293 7.854 5.146a.5.5 0 0 0-.708.708L11.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L12 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L12.707 10z"
            />
          </svg>
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-col h-full justify-center items-center">
        <p className="text-lg font-bold">Finder</p>
        <p className="text-gray-600 text-sm mt-2">No files found.</p>
      </div>
    </div>
  </div>
);

const TerminalModal = ({ closeTerminal }) => {
  const [actualDay, setActualDay] = useState("Checking Date & Time...");
  const [actualTime, setActualTime] = useState("");
  const [inputCommand, setInputCommand] = useState("");
  // const [outputText, setOutputText] = useState("");
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  useEffect(() => {
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      new Date()
    );
    setActualTime(formattedTime);
    setTimeout(() => {
      const options = { weekday: "short", month: "short", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
      setActualDay(formattedDate);
    }, 3000);
  }, []);

  // const handlenputChange = (e) => {
  //   setInputCommand(e.target.value);
  // };

  // const handleCommandSubmit = (e) => {
  //   e.preventDefault();
  //   executeCommand(inputCommand);
  // };

  // const executeCommand = (command) => {
  //   // Reset input field
  //   setInputCommand("");

  //   // Handle different commands
  //   switch (command.trim()) {
  //     case "date":
  //       setOutputText(new Date().toLocaleDateString());
  //       break;
  //     case "time":
  //       setOutputText(new Date().toLocaleTimeString());
  //       break;
  //     case "help":
  //       setOutputText("Available commands: date, time, help");
  //       break;
  //     default:
  //       setOutputText("Command not found. Type 'help' for available commands.");
  //   }
  // };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg bg-gray-600 rounded-lg w-[35rem] h-auto">
        <div className="bg-gray-600 w-full py-2 flex items-center justify-between rounded-t-lg border-t border-gray-400 px-4">
          <div className="flex justify-start items-center">
            <div
              className="w-3 h-3 rounded-full bg-red-500 mr-2"
              onClick={closeTerminal}
            ></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          </div>
          <div className="flex items-center justify-start">
            <img src="/home.webp" width={20} height={20} alt="Home Icon" />
            <p className="ps-2 text-sm text-white">jvstraphael10 - AI Assistant on Terminal</p>
          </div>
          <div></div>
        </div>
        <div className="bg-gray-800 w-full py-2 h-[50vh] overflow-y-auto flex flex-col rounded-b-md px-2 text-sm">
          <p className="text-white">
            Last Login: {actualDay} <span>{actualTime}</span> on mysql
          </p>
          <div className="text-white">
            <p style={{ whiteSpace: "pre-line" }}>
              <ul>
                {messages.map((m, index) => (
                  <li key={index} className="space-y-2 flex flex-col">
                    {m.role === "user" ? "Themba: " : "Assistant: "}
                    {m.content}
                    <span className="w-full py-1 mb-1 border-b h-2" />
                  </li>
                ))}
              </ul>
            </p>

            <div className="flex flex-row space-x-1">
              <span className="">jvstraphael10@My-MacBook-Air ~ % </span>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  autoFocus
                  className="bg-transparent text-white outline-none border-none w-11/12"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
