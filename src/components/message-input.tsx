import React, { useState } from "react";

type Props = {
  onSend: (message: string) => void;
  loading: boolean;
  promptActive?: boolean;
};

const MessageInput: React.FC<Props> = ({ onSend, loading, promptActive = false }) => {
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-t border-slate-700/50 backdrop-blur-sm">
      {promptActive && (
        <div className="mb-4 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3 text-cyan-300 text-sm">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Custom Protocol Active</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSend} className="flex gap-4">
        <div className="flex-1 relative">
          <input
            className="w-full px-6 py-4 pr-16 border border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 bg-slate-800/50 focus:bg-slate-800/70 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Transmit neural signal..."
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            {loading ? (
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput; 