import React from "react";
import { type Message } from "../types";

type Props = {
  messages: Message[];
};

const MessageList: React.FC<Props> = ({ messages }) => (
  <div className="flex flex-col gap-4 p-6 overflow-y-auto h-full bg-gradient-to-b from-slate-900/30 to-slate-800/30">
    {messages.length === 0 && (
      <div className="flex flex-col items-center justify-center h-full text-slate-400">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        </div>
        <p className="text-lg font-medium text-slate-300 mb-2">Initialize Neural Link</p>
        <p className="text-sm text-slate-500 text-center max-w-xs">
          Begin communication with the Alfie AI system
        </p>
      </div>
    )}
    {messages.map((msg, idx) => (
      <div
        key={idx}
        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
      >
        <div className="flex items-end gap-3 max-w-xs lg:max-w-md">
          {msg.role === "ai" && (
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
          )}
          <div
            className={`px-5 py-4 rounded-2xl backdrop-blur-sm shadow-lg ${
              msg.role === "user"
                ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                : "bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-200 border border-slate-600/30"
            }`}
          >
            <p className="text-sm leading-relaxed">{msg.content}</p>
          </div>
          {msg.role === "user" && (
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default MessageList; 