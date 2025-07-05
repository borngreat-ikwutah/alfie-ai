import React from "react";
import { type Message } from "../types";
import MessageList from "./message-list";
import MessageInput from "./message-input";

type Props = {
  messages: Message[];
  onSend: (message: string) => void;
  loading: boolean;
  promptActive: boolean;
  universalPrompt: string;
};

const ChatWindow: React.FC<Props> = ({ 
  messages, 
  onSend, 
  loading, 
  promptActive, 
  universalPrompt 
}) => (
  <div className="flex flex-col h-full max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
    {/* Futuristic Header */}
    <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm px-8 py-6 border-b border-slate-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Alfie Interface</h3>
            <p className="text-cyan-300 text-sm font-light">Neural Network Active</p>
          </div>
        </div>
        {promptActive && (
          <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <span className="text-cyan-300 text-sm font-medium">Custom Protocol</span>
          </div>
        )}
      </div>
      {promptActive && (
        <div className="mt-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-600/30 backdrop-blur-sm">
          <div className="text-slate-300 text-sm">
            <span className="font-medium text-cyan-300">Active Protocol:</span> {universalPrompt.length > 60 
              ? universalPrompt.substring(0, 60) + "..." 
              : universalPrompt}
          </div>
        </div>
      )}
    </div>
    
    {/* Messages Area */}
    <div className="flex-1 overflow-hidden">
      <MessageList messages={messages} />
    </div>
    
    {/* Input Area */}
    <MessageInput onSend={onSend} loading={loading} promptActive={promptActive} />
  </div>
);

export default ChatWindow; 