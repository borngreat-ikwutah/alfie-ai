import React, { useState, useEffect } from "react";
import ChatWindow from "./components/chat-window";
import Settings from "./components/settings";
import { type Message } from "./types";

const mockAIResponse = async (userMessage: string): Promise<string> => {
  // Simulate network delay and AI response
  return new Promise((resolve) =>
    setTimeout(() => resolve("AI Response: " + userMessage), 3000)
  );
};

const App  = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [universalPrompt, setUniversalPrompt] = useState<string>(() => {

    return localStorage.getItem("universalPrompt") || "";
  });

  // Save universal prompt to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("universalPrompt", universalPrompt);
  }, [universalPrompt]);

  const sendMessage = async (userMessage: string) => {
    // Add user message to chat
    setMessages((msgs) => [...msgs, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      // Prepend universal prompt to user message if it exists
      const fullMessage = universalPrompt 
        ? `${universalPrompt}\n\nUser: ${userMessage}`
        : userMessage;

      const aiReply = await mockAIResponse(fullMessage);
      setMessages((msgs) => [...msgs, { role: "ai", content: aiReply }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages((msgs) => [...msgs, { 
        role: "ai", 
        content: "Sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Alfie AI
            </h1>
          </div>
          <p className="text-slate-300 text-lg font-light tracking-wide">
            Advanced Neural Interface System
          </p>
        </div>
        
        <Settings 
          universalPrompt={universalPrompt}
          setUniversalPrompt={setUniversalPrompt}
        />
        
        <div className="h-[700px]">
          <ChatWindow 
            messages={messages} 
            onSend={sendMessage} 
            loading={loading}
            promptActive={!!universalPrompt}
            universalPrompt={universalPrompt}
          />
        </div>
      </div>
    </div>
  );
};

export default App;